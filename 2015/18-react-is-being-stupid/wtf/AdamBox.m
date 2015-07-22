//
//  AdamBox.m
//  wtf
//
//  Created by Shaheen Ghiassy on 7/22/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "AdamBox.h"

@implementation AdamBox

RCT_EXPORT_MODULE()

- (UIView *)view {

  UISwitch *aSwitch = [[UISwitch alloc] init];
  aSwitch.layer.borderColor = [UIColor orangeColor].CGColor;
  aSwitch.layer.borderWidth = 1.0f;

//  aView.layer.borderColor = [UIColor orangeColor].CGColor;
//  aView.layer.borderWidth = 10.0f;
//
//  UILabel *shaheen = [[UILabel alloc] init];
//  shaheen.text = @"Shaheen";
//  [aView addSubview:shaheen];
//  aView.translatesAutoresizingMaskIntoConstraints = NO;
//  [aView addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"H:|[label]|"
//                                                                options:0
//                                                                metrics:nil
//                                                                  views:@{@"label":shaheen}]];
//  [aView addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"V:|[label]|"
//                                                                options:0
//                                                                metrics:nil
//                                                                  views:@{@"label":shaheen}]];

    UIView *aView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 100, 100)];
  [aView addSubview:aSwitch];
  aView.backgroundColor = [UIColor redColor];
  aView.layer.borderColor = [UIColor blueColor].CGColor;
  aView.layer.borderWidth = 3.0f;

  return aView;
}

@end
