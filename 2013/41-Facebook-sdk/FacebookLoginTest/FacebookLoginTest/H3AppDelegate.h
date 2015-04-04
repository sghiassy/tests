//
//  H3AppDelegate.h
//  FacebookLoginTest
//
//  Created by Shaheen Ghiassy on 12/8/13.
//  Copyright (c) 2013 Shaheen Ghiassy. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface H3AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;
- (void)openSession;
extern NSString *const SCSessionStateChangedNotification;

@end
