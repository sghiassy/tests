//
//  ShaheenBox.m
//  Custom
//
//  Created by Shaheen Ghiassy on 7/22/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "ShaheenBox.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"

@implementation ShaheenBox

RCT_EXPORT_MODULE()

- (UIView *)view {
  UIView *aView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 100, 100)];
  aView.backgroundColor = [UIColor redColor];
  return aView;
}

@end
