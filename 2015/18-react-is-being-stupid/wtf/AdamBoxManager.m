//
//  AdamBoxManager.m
//  wtf
//
//  Created by Shaheen Ghiassy on 7/22/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "AdamBoxManager.h"

@implementation AdamBoxManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  UIView *aView = [[UIView alloc] init];
  aView.backgroundColor = [UIColor redColor];
  aView.layer.borderColor = [UIColor blueColor].CGColor;
  aView.layer.borderWidth = 3.0f;

  UILabel *shaheen = [[UILabel alloc] init];
  shaheen.text = @"Shaheen";
  shaheen.textAlignment = NSTextAlignmentCenter;
  [aView addSubview:shaheen];
  shaheen.translatesAutoresizingMaskIntoConstraints = NO;
  [aView addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"H:|[label]|"
                                                                options:0
                                                                metrics:nil
                                                                  views:@{@"label":shaheen}]];
  [aView addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"V:|[label]|"
                                                                options:0
                                                                metrics:nil
                                                                  views:@{@"label":shaheen}]];

  return aView;
}

RCT_EXPORT_VIEW_PROPERTY(textColor, UIColor);

@end
