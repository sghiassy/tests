//
//  UIVerticalStackView.m
//  HeaderFooter
//
//  Created by Shaheen Ghiassy on 4/30/15.
//  Copyright (c) 2015 Shaheen Ghiassy. All rights reserved.
//

#import "UIVerticalStackView.h"


@interface UIVerticalStackView ()

@property (nonatomic, strong) NSMutableArray *views;

@end


@implementation UIVerticalStackView

- (instancetype)init {
    self = [super init];

    if (self) {
        _views = [[NSMutableArray alloc] init];
    }

    return self;
}

- (void)addView:(UIView *)view {
    [self.views addObject:view];
    [self addSubview:view];
    view.translatesAutoresizingMaskIntoConstraints = NO;
    [self addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"H:|[view]|"
                                                                 options:0
                                                                 metrics:nil
                                                                   views:@{@"view":view}]];
    [self addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"V:|[view(height)]"
                                                                 options:0
                                                                 metrics:@{@"height":@(view.frame.size.height)}
                                                                   views:@{@"view":view}]];
    [self invalidateIntrinsicContentSize];
}

- (CGSize)intrinsicContentSize {
    NSInteger totalHeight = 0;
    NSInteger maxWidth = 0;

    for (UIView *view in self.views) {
        if (view.frame.size.width > maxWidth) {
            maxWidth = view.frame.size.width;
        }

        totalHeight += view.frame.size.height;
    }

    return CGSizeMake(maxWidth, totalHeight);
}

@end
