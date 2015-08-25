//
//  ViewController.m
//  Native
//
//  Created by Shaheen Ghiassy on 8/25/15.
//  Copyright (c) 2015 Groupon. All rights reserved.
//

#import "RootVC.h"
#import "VC1ViewController.h"

@interface RootVC ()

@end

@implementation RootVC

- (void)viewDidLoad {
    [super viewDidLoad];

    self.view.backgroundColor = [UIColor whiteColor];

    UILabel *label = [[UILabel alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    label.textAlignment = NSTextAlignmentCenter;
    label.font = [UIFont systemFontOfSize:28.0f];
    label.text = @"Root";
    label.userInteractionEnabled = YES;
    [self.view addSubview:label];

    UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(tap)];
    [label addGestureRecognizer:tap];
}

- (void)tap {
    VC1ViewController *newVC = [[VC1ViewController alloc] init];
    [self.navigationController pushViewController:newVC animated:YES];
}

@end
