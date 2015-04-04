//
//  SCViewController.m
//  FacebookLoginTest
//
//  Created by Shaheen Ghiassy on 12/8/13.
//  Copyright (c) 2013 Shaheen Ghiassy. All rights reserved.
//

#import "SCViewController.h"
#import <FacebookSDK/FacebookSDK.h>
#import "H3AppDelegate.h"

@interface SCViewController ()

@property (strong, nonatomic) IBOutlet FBProfilePictureView *userProfileImage;
@property (strong, nonatomic) IBOutlet UILabel *userNameLabel;

@end

@implementation SCViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil {
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];

    if (self) {
        self.navigationItem.rightBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@"Logout"
                                                                                  style:UIBarButtonItemStyleBordered
                                                                                 target:self
                                                                                 action:@selector(logoutButtonWasPressed:)];
    }

    return self;
}

- (void)viewWillAppear:(BOOL)animated {
    if (FBSession.activeSession.isOpen) {
        [self populateUserDetails];
    }
}

- (void)viewDidLoad {
    [super viewDidLoad];

    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(sessionStateChanged:) name:SCSessionStateChangedNotification object:nil];
}

- (void)dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)sessionStateChanged:(NSNotification*)notification {
    [self populateUserDetails];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

-(void)logoutButtonWasPressed:(id)sender {
    [FBSession.activeSession closeAndClearTokenInformation];
}

- (void)populateUserDetails {
    if (FBSession.activeSession.isOpen) {
        [[FBRequest requestForMe] startWithCompletionHandler:^(FBRequestConnection *connection, NSDictionary<FBGraphUser> *user, NSError *error) {
            if (!error) {
                self.userNameLabel.text = user.name;
                self.userProfileImage.profileID = user.id;
            }
        }];
    }
}

@end
