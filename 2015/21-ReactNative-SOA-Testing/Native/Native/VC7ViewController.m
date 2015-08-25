//
//  VC7ViewController.m
//  Native
//
//  Created by Shaheen Ghiassy on 8/25/15.
//  Copyright (c) 2015 Groupon. All rights reserved.
//

#import "VC7ViewController.h"
#import "VC8ViewController.h"

@interface VC7ViewController ()

@end

@implementation VC7ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    self.view.backgroundColor = [UIColor whiteColor];

    UILabel *label = [[UILabel alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    label.textAlignment = NSTextAlignmentCenter;
    label.font = [UIFont systemFontOfSize:28.0f];
    label.text = @"VC7";
    label.userInteractionEnabled = YES;
    [self.view addSubview:label];

    UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(tap)];
    [label addGestureRecognizer:tap];
}

- (void)tap {
    VC8ViewController *newVC = [[VC8ViewController alloc] init];
    [self.navigationController pushViewController:newVC animated:YES];
}

@end
