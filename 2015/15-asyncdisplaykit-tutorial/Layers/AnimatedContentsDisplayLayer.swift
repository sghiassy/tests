//
//  AnimatedContentsDisplayLayer.swift
//  Layers
//
//  Created by Shaheen Ghiassy on 7/21/15.
//  Copyright (c) 2015 Razeware LLC. All rights reserved.
//

import UIKit

class AnimatedContentsDisplayLayer: _ASDisplayLayer {

    override func actionForKey(event: String!) -> CAAction! {

        if let action = super.actionForKey(event) {
            return action
        }

        if event == "contents" && contents == nil {
            let transition = CATransition()
            transition.duration = 0.2
            transition.type = kCATransitionFade
            return transition
        }
        
        return nil
    }
   
}
