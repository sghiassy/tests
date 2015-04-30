//
//  UIHeaderFooterView.m
//  HeaderFooter
//
//  Created by Shaheen Ghiassy on 4/30/15.
//  Copyright (c) 2015 Shaheen Ghiassy. All rights reserved.
//

#import "UIHeaderFooterView.h"

@implementation UIHeaderFooterView

- (instancetype)init {
    self = [super init];

    if (self) {
        _header = [[UIVerticalStackView alloc] init];
        _body = [[UIView alloc] init];
        _footer = [[UIVerticalStackView alloc] init];

        _header.backgroundColor = [UIColor greenColor];
        _body.backgroundColor = [UIColor blueColor];
        _footer.backgroundColor = [UIColor blackColor];

        _header.translatesAutoresizingMaskIntoConstraints = NO;
        _body.translatesAutoresizingMaskIntoConstraints = NO;
        _footer.translatesAutoresizingMaskIntoConstraints = NO;

        [self addSubview:_header];
        [self addSubview:_body];
        [self addSubview:_footer];

        [self addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"H:|[view]|"
                                                                     options:0
                                                                     metrics:nil
                                                                       views:@{@"view":_header}]];
        [self addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"H:|[view]|"
                                                                     options:0
                                                                     metrics:nil
                                                                       views:@{@"view":_body}]];
        [self addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"H:|[view]|"
                                                                     options:0
                                                                     metrics:nil
                                                                       views:@{@"view":_footer}]];

        [self addConstraints:[NSLayoutConstraint constraintsWithVisualFormat:@"V:|[header][body][footer]|"
                                                                     options:0
                                                                     metrics:nil
                                                                       views:@{@"header":_header,
                                                                               @"body":_body,
                                                                               @"footer":_footer}]];
    }

    return self;
}

@end
