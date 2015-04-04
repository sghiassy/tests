//
//  H3AppDelegate.m
//  FacebookLoginTest
//
//  Created by Shaheen Ghiassy on 12/8/13.
//  Copyright (c) 2013 Shaheen Ghiassy. All rights reserved.
//

#import "H3AppDelegate.h"
#import <FacebookSDK/FacebookSDK.h>
#import "SCLoginViewController.h"
#import "SCViewController.h"

@interface H3AppDelegate ()

@property (strong, nonatomic) UINavigationController* navController;
@property (strong, nonatomic) SCViewController *mainViewController;

@end

NSString *const SCSessionStateChangedNotification =
@"com.facebook.Scrumptious:SCSessionStateChangedNotification";

@implementation H3AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    self.mainViewController = [[SCViewController alloc] initWithNibName:@"SCViewController" bundle:nil];
    self.navController = [[UINavigationController alloc] initWithRootViewController:self.mainViewController];
    self.window.rootViewController = self.navController;
    [self.window makeKeyAndVisible];

    if (FBSession.activeSession.state == FBSessionStateCreatedTokenLoaded) {
        // Yes, so just open the session (this won't display any UX).
        [self openSession];
    } else {
        // No, display the login page.
        [self showLoginView];
    }

    return YES;
}
							
- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later. 
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.

    // We need to properly handle activation of the application with regards to Facebook Login
    // (e.g., returning from iOS 6.0 Login Dialog or from fast app switching).
    [FBSession.activeSession handleDidBecomeActive];
}

- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

- (void)showLoginView {
    UIViewController *topViewController = [self.navController topViewController];
    UIViewController *modalViewController = [topViewController modalViewController];

    // If the login screen is not already displayed, display it. If the login screen is
    // displayed, then getting back here means the login in progress did not successfully
    // complete. In that case, notify the login view so it can update its UI appropriately.
    if (![modalViewController isKindOfClass:[SCLoginViewController class]]) {
        SCLoginViewController *loginViewController = [[SCLoginViewController alloc] initWithNibName:@"SCLoginViewController"
                                                                                             bundle:nil];
        [topViewController presentViewController:loginViewController animated:NO completion:nil];
    } else {
        SCLoginViewController *loginViewController =
        (SCLoginViewController *)modalViewController;
        [loginViewController loginFailed];
    }
}

- (void)sessionStateChanged:(FBSession *)session state:(FBSessionState) state error:(NSError *)error {
    switch (state) {
        case FBSessionStateOpen: {
            UIViewController *topViewController =
            [self.navController topViewController];
            if ([[topViewController modalViewController] isKindOfClass:[SCLoginViewController class]]) {
                [topViewController dismissModalViewControllerAnimated:YES];
            }
        }
            break;
        case FBSessionStateClosed:
        case FBSessionStateClosedLoginFailed:
            // Once the user has logged in, we want them to
            // be looking at the root view.
            [self.navController popToRootViewControllerAnimated:NO];

            [FBSession.activeSession closeAndClearTokenInformation];

            [self showLoginView];
            break;
        default:
            break;
    }

    [[NSNotificationCenter defaultCenter] postNotificationName:SCSessionStateChangedNotification object:session];

    if (error) {
        UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:@"Error"
                                                            message:error.localizedDescription
                                                           delegate:nil
                                                  cancelButtonTitle:@"OK"
                                                  otherButtonTitles:nil];
        [alertView show];
    }
}

- (void)openSession {
    [FBSession openActiveSessionWithReadPermissions:nil
                                       allowLoginUI:YES
                                  completionHandler:
     ^(FBSession *session,
       FBSessionState state, NSError *error) {
         [self sessionStateChanged:session state:state error:error];
     }];
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
    return [FBSession.activeSession handleOpenURL:url];
}

@end
