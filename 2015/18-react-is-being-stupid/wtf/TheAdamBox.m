//
//  TheAdamBox.m
//  wtf
//
//  Created by Shaheen Ghiassy on 7/22/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "TheAdamBox.h"

@interface TheAdamBox ()

@property (nonatomic, strong)UILabel *shaheen;

@end

@implementation TheAdamBox

- (instancetype)init {
  self = [super init];

  if (self) {
    _shaheen = [[UILabel alloc] init];
    _shaheen.text = @"Shaheen";
    _shaheen.textAlignment = NSTextAlignmentCenter;
    [self addSubview:_shaheen];
    _shaheen.translatesAutoresizingMaskIntoConstraints = NO;
    [self addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"H:|[label]|"
                                                                  options:0
                                                                  metrics:nil
                                                                    views:@{@"label":_shaheen}]];
    [self addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"V:|[label]|"
                                                                  options:0
                                                                  metrics:nil
                                                                    views:@{@"label":_shaheen}]];
  }

  return self;

}

- (void)setTextColor:(UIColor *)color {
  self.shaheen.textColor = color;
}

@end
