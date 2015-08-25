//
//  NativeRouterViewController.m
//  ReactRebelMonkey
//
//  Created by Shaheen Ghiassy on 8/19/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "NativeRouterViewController.h"
#import "RCTRootView.h"


@interface NativeRouterViewController ()

@property (nonatomic, copy) NSDictionary *routes;

@property (nonatomic, copy) NSMutableArray *routeHistory;

@end


@implementation NativeRouterViewController

RCT_EXPORT_MODULE()

#pragma mark - Object Lifecycle

+ (NativeRouterViewController *)sharedInstance {
  static NativeRouterViewController *instance = nil;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    instance = [[NativeRouterViewController alloc] init];
  });

  return instance;
}

- (instancetype)initWithRoutes:(NSDictionary *)routes startingWith:(NSString *)root {
  self = [super init];

  if (self) {
    _routes = routes.copy;
    _routeHistory = [[NSMutableArray alloc] init];

    [self GET:root headers:nil withDisplayCallback:^(UIView *newView) {
      self.view = newView;
    }];
  }

  return self;
}

#pragma mark - Route Methods

RCT_EXPORT_METHOD(GET:(NSString *)route headers:(NSDictionary *)headers callback:(RCTResponseSenderBlock)callback) {
  NativeRouterViewController *this = [NativeRouterViewController sharedInstance];

  [this GET:route headers:headers withDisplayCallback:^(UIView *newView) {
    UIViewController *newVC = [[UIViewController alloc] init];
    newVC.view = newView;
    [this presentViewController:newVC animated:YES completion:^{
      callback(@[[NSNull null]]);
    }];
  }];
}

- (void)GET:(NSString *)route headers:(NSDictionary *)headers withDisplayCallback:(void(^)(UIView *newView))displayCallback {
  if (headers == nil) {
    headers = @{};
  }

  dispatch_async(dispatch_get_main_queue(), ^{
    NativeRouterViewController *this = [NativeRouterViewController sharedInstance];

    NSDictionary *domain = this.routes[route];
    NSString *urlString = domain[@"url"];
    NSURL *url = [NSURL URLWithString:urlString];
    RCTRootView *newView = [[RCTRootView alloc] initWithBundleURL:url moduleName:route launchOptions:@{@"ENV":headers}];

    if (displayCallback) {
      displayCallback(newView);
    }
  });
}

RCT_EXPORT_METHOD(back:(RCTResponseSenderBlock)callback) {
  [[NativeRouterViewController sharedInstance] dismissViewControllerAnimated:YES completion:^{
    callback(@[[NSNull null]]);
  }];
}

#pragma mark - Utility Methods

- (NSDictionary *)reqFromURL:(NSURL *)url {
  return @{@"scheme": ([url scheme]) ? [url scheme] : @"",
           @"host": ([url host]) ? [url host] : @"",
           @"port": ([url port]) ? [url port] : @"",
           @"path": ([url path]) ? [url path] : @"",
           @"pathComponents": ([url pathComponents]) ? [url pathComponents] : @"",
           @"parameterString": ([url parameterString]) ? [url parameterString] : @"",
           @"query": ([url query]) ? [url query] : @"",
           @"fragment": ([url fragment]) ? [url fragment] : @""};
}

- (NSDictionary *)resFromView:(UIView *)view {
  return @{@"view":view};
}

@end
