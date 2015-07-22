//
//  ShaheenSlider.m
//  Custom
//
//  Created by Shaheen Ghiassy on 7/22/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "ShaheenSlider.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"

@implementation ShaheenSlider

RCT_EXPORT_MODULE()

- (UIView *)view
{
  UISlider *slider = [[UISlider alloc] init];
  [slider addTarget:self action:@selector(sliderValueChanged:) forControlEvents:UIControlEventValueChanged];
  [slider addTarget:self action:@selector(sliderTouchEnd:) forControlEvents:UIControlEventTouchUpInside];
  return slider;
}

- (void)sliderValueChanged:(UISlider *)sender
{
  NSDictionary *event = @{
                          @"target": sender.reactTag,
                          @"value": @(sender.value),
                          @"continuous": @YES,
                          };

  [self.bridge.eventDispatcher sendInputEventWithName:@"topChange" body:event];
}

- (void)sliderTouchEnd:(UISlider *)sender
{
  NSDictionary *event = @{
                          @"target": sender.reactTag,
                          @"value": @(sender.value),
                          @"continuous": @NO,
                          };

  [self.bridge.eventDispatcher sendInputEventWithName:@"topChange" body:event];
}

RCT_EXPORT_VIEW_PROPERTY(value, float);
RCT_EXPORT_VIEW_PROPERTY(minimumValue, float);
RCT_EXPORT_VIEW_PROPERTY(maximumValue, float);
RCT_EXPORT_VIEW_PROPERTY(minimumTrackTintColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(maximumTrackTintColor, UIColor);

@end
