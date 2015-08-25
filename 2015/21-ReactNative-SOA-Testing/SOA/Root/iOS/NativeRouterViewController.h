//
//  NativeRouterViewController.h
//  ReactRebelMonkey
//
//  Created by Shaheen Ghiassy on 8/19/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"

@interface NativeRouterViewController : UIViewController <RCTBridgeModule>\

+ (NativeRouterViewController *)sharedInstance;

- (instancetype)initWithRoutes:(NSDictionary *)routes startingWith:(NSString *)root;

@end
