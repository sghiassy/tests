//
//  RainforestCardCell.swift
//  Layers
//
//  Created by René Cacheaux on 9/1/14.
//  Copyright (c) 2014 Razeware LLC. All rights reserved.
//

import UIKit

class RainforestCardCell: UICollectionViewCell {
    var featureImageSizeOptional: CGSize?
    var placeholderLayer: CALayer!
    var contentLayer: CALayer?
    var containerNode: ASDisplayNode?

    override func awakeFromNib() {
        super.awakeFromNib()

        placeholderLayer = CALayer()
        placeholderLayer.contents = UIImage(named: "cardPlaceholder")!.CGImage
        placeholderLayer.contentsGravity = kCAGravityCenter
        placeholderLayer.contentsScale = UIScreen.mainScreen().scale
        placeholderLayer.backgroundColor = UIColor(hue: 0, saturation: 0, brightness: 0.85, alpha: 1).CGColor
        contentView.layer.addSublayer(placeholderLayer)
    }

    //MARK: Layout
    override func sizeThatFits(size: CGSize) -> CGSize {
        if let featureImageSize = featureImageSizeOptional {
            return FrameCalculator.sizeThatFits(size, withImageSize: featureImageSize)
        } else {
            return CGSizeZero
        }
    }

    override func layoutSubviews() {
        super.layoutSubviews()

        CATransaction.begin()
        CATransaction.setValue(kCFBooleanTrue, forKey: kCATransactionDisableActions)
        placeholderLayer?.frame = bounds
        CATransaction.commit()
    }

    //MARK: Cell Reuse
    override func prepareForReuse() {
        super.prepareForReuse()
        containerNode?.recursiveSetPreventOrCancelDisplay(true)
        contentLayer?.removeFromSuperlayer()
        contentLayer = nil
        containerNode = nil
    }

    func configureCellDisplayWithCardInfo(cardInfo: RainforestCardInfo) {
        //MARK: Image Size Section
        let image = UIImage(named: cardInfo.imageName)!
        featureImageSizeOptional = image.size

        //MARK: Node Creation Section
        let backgroundImageNode = ASImageNode()
        backgroundImageNode.image = image
        backgroundImageNode.contentMode = .ScaleAspectFill
        backgroundImageNode.layerBacked = true
        backgroundImageNode.imageModificationBlock = { [weak backgroundImageNode] input in
            if input == nil {
                return input
            }

            let didCancelBlur: () -> Bool = {
                var isCancelled = true
                // 1
                if let strongBackgroundImageNode = backgroundImageNode {
                    // 2
                    let isCancelledClosure = {
                        isCancelled = strongBackgroundImageNode.preventOrCancelDisplay
                    }

                    // 3
                    if NSThread.isMainThread() {
                        isCancelledClosure()
                    } else {
                        dispatch_sync(dispatch_get_main_queue(), isCancelledClosure)
                    }
                }
                return isCancelled
            }

            if let blurredImage = input.applyBlurWithRadius(
                30,
                tintColor: UIColor(white:0.5, alpha: 0.3),
                saturationDeltaFactor: 1.8,
                maskImage: nil,
                didCancel: {return didCancelBlur()}) {
                return blurredImage
            } else {
                return image
            }

        }

        //MARK: Container Node Creation Section
        let containerNode = ASDisplayNode()
        containerNode.layerBacked = true
        containerNode.shouldRasterizeDescendants = true
        containerNode.borderColor = UIColor(hue: 0, saturation: 0, brightness: 0.85, alpha: 0.2).CGColor
        containerNode.borderWidth = 1

        let featureImageNode = ASImageNode()
        featureImageNode.layerBacked = true
        featureImageNode.contentMode = .ScaleAspectFit
        featureImageNode.image = image

        let titleTextNode = ASTextNode()
        titleTextNode.layerBacked = true
        titleTextNode.backgroundColor = UIColor.clearColor()
        titleTextNode.attributedString = NSAttributedString.attributedStringForTitleText(cardInfo.name)

        //MARK: Node Hierarchy Section
        containerNode.addSubnode(backgroundImageNode)
        containerNode.addSubnode(featureImageNode)
        containerNode.addSubnode(titleTextNode)

        //MARK: Node Layout Section
        containerNode.frame = FrameCalculator.frameForContainer(featureImageSize: image.size)
        backgroundImageNode.frame = FrameCalculator.frameForBackgroundImage(containerBounds: containerNode.bounds)
        featureImageNode.frame = FrameCalculator.frameForFeatureImage(featureImageSize: image.size, containerFrameWidth: containerNode.frame.size.width)
        titleTextNode.frame = FrameCalculator.frameForTitleText(containerBounds: containerNode.bounds, featureImageFrame: featureImageNode.frame)

        //MARK: Node Layer and Wrap Up Section
        self.contentView.layer.addSublayer(containerNode.layer)
        self.contentLayer = containerNode.layer
        self.containerNode = containerNode
    }

}
