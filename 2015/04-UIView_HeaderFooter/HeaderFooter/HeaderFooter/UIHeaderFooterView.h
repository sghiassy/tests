//
//  UIHeaderFooterView.h
//  HeaderFooter
//
//  Created by Shaheen Ghiassy on 4/30/15.
//  Copyright (c) 2015 Shaheen Ghiassy. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "UIVerticalStackView.h"

@interface UIHeaderFooterView : UIView

@property (nonatomic, strong) UIVerticalStackView *header;
@property (nonatomic, strong) UIView *body;
@property (nonatomic, strong) UIVerticalStackView *footer;

@end
