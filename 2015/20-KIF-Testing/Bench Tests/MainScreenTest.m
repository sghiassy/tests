//
//  MainScreenTest.m
//  Bench
//
//  Created by Shaheen Ghiassy on 8/17/15.
//  Copyright (c) 2015 mokacoding. All rights reserved.
//

#import "MainScreenTest.h"

@implementation MainScreenTest2

- (void)testUI {
    [tester waitForViewWithAccessibilityLabel:@"Bench"];
    [tester waitForViewWithAccessibilityLabel:@"say hello"];
    [tester waitForViewWithAccessibilityLabel:@"show elements"];
    [tester waitForViewWithAccessibilityLabel:@"mokacoding.com"];
}

/**
 *  When I tap the "say hello" button, I see a greetings alert, so that I can be happier :)
 */
- (void)testSayHello {
    [tester tapViewWithAccessibilityLabel:@"say hello"];

    [tester waitForViewWithAccessibilityLabel:@"Hello"];
    [tester waitForViewWithAccessibilityLabel:@"Sup?"];
    [tester waitForViewWithAccessibilityLabel:@"Dismiss"];

    [tester tapViewWithAccessibilityLabel:@"Dismiss"];

    [tester waitForAbsenceOfViewWithAccessibilityLabel:@"Hello"];
    [tester waitForAbsenceOfViewWithAccessibilityLabel:@"Sup?"];
    [tester waitForAbsenceOfViewWithAccessibilityLabel:@"Dismiss"];
}

/**
 *  When I tap the "show elements" button, I see a listt of elements, so I can expand my knowledge
 */
- (void)testShowElements {
    [tester tapViewWithAccessibilityLabel:@"show elements"];

    [tester waitForViewWithAccessibilityLabel:@"Elements"];
    [tester waitForViewWithAccessibilityLabel:@"[H] Hydrogen (1)" ];
    [tester waitForViewWithAccessibilityLabel:@"[Uuo] Ununoctium (118)"];
    [tester waitForViewWithAccessibilityLabel:@"Back"];

    [tester tapViewWithAccessibilityLabel:@"Back"];

    [tester waitForAbsenceOfViewWithAccessibilityLabel:@"Elements"];
}

@end
