//
//  AdamBoxManager.m
//  wtf
//
//  Created by Shaheen Ghiassy on 7/22/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "AdamBoxManager.h"
#import "TheAdamBox.h"

@implementation AdamBoxManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  TheAdamBox *box = [[TheAdamBox alloc] init];
  box.layer.borderColor = [UIColor orangeColor].CGColor;
  box.layer.borderWidth = 1.0f;
  return box;
}

RCT_EXPORT_VIEW_PROPERTY(textColor, UIColor);

@end
