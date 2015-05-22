//
//  TestView.m
//  HeaderFooter
//
//  Created by Shaheen Ghiassy on 4/30/15.
//  Copyright (c) 2015 Shaheen Ghiassy. All rights reserved.
//

#import "TestView.h"

@implementation TestView

- (instancetype)init {
    self = [super init];

    if (self) {
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2.5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
            UIView *redHeader = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 320, 100)];
            redHeader.backgroundColor = [UIColor redColor];
            [self.header addView:redHeader];

            UIView *redHeader2 = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 320, 100)];
            redHeader2.backgroundColor = [UIColor purpleColor];
            [self.footer addView:redHeader2];

            dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2.5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
                UIView *yellowHeader= [[UIView alloc] initWithFrame:CGRectMake(0, 0, 320, 50)];
                yellowHeader.backgroundColor = [UIColor grayColor];
                [self.header addView:yellowHeader];

                UIView *yellowHeader2 = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 320, 50)];
                yellowHeader2.backgroundColor = [UIColor orangeColor];
                [self.footer addView:yellowHeader2];
            });
        });
    }

    return self;
}

@end
