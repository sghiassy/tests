/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
#import "NativeRouterViewController.h"
#import "RCTRootView.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  NSDictionary *routes = @{
                           @"Root": @{
                               @"url":@"http://localhost:8081/index.ios.bundle"},
                           @"View1": @{
                               @"url":@"http://localhost:8082/index.ios.bundle"},
                           @"View2": @{
                               @"url":@"http://localhost:8083/index.ios.bundle"},
                           @"View3": @{
                               @"url":@"http://localhost:8084/index.ios.bundle"},
                           @"View4": @{
                               @"url":@"http://localhost:8085/index.ios.bundle"},
                           @"View5": @{
                               @"url":@"http://localhost:8086/index.ios.bundle"},
                           @"View6": @{
                               @"url":@"http://localhost:8087/index.ios.bundle"},
                           @"View7": @{
                               @"url":@"http://localhost:8088/index.ios.bundle"},
                           @"View8": @{
                               @"url":@"http://localhost:8089/index.ios.bundle"},
                           @"View9": @{
                               @"url":@"http://localhost:8090/index.ios.bundle"},
                           @"View10": @{
                               @"url":@"http://localhost:8091/index.ios.bundle"},
                           @"View11": @{
                               @"url":@"http://localhost:8092/index.ios.bundle"},
                           @"View12": @{
                               @"url":@"http://localhost:8093/index.ios.bundle"},
                           @"View13": @{
                               @"url":@"http://localhost:8094/index.ios.bundle"},
                           @"View14": @{
                               @"url":@"http://localhost:8095/index.ios.bundle"},
                           @"View15": @{
                               @"url":@"http://localhost:8096/index.ios.bundle"},
                           @"View16": @{
                               @"url":@"http://localhost:8097/index.ios.bundle"},
                           @"View17": @{
                               @"url":@"http://localhost:8098/index.ios.bundle"},
                           @"View18": @{
                               @"url":@"http://localhost:8099/index.ios.bundle"},
                           @"View19": @{
                               @"url":@"http://localhost:8083/index.ios.bundle"},
                           @"View20": @{
                               @"url":@"http://localhost:8083/index.ios.bundle"},
                           };

  NativeRouterViewController *routerVC = [[NativeRouterViewController sharedInstance] initWithRoutes:routes startingWith:@"Root"];
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.rootViewController = routerVC;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
