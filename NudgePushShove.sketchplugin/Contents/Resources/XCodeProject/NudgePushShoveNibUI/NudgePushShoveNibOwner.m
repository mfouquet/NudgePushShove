#import <Cocoa/Cocoa.h>

@interface UniformNibOwner : NSObject


/* View bindings go here */
@property IBOutlet NSWindow *mainWindow;
@property IBOutlet NSButton *radio2;
@property IBOutlet NSButton *radio4;
@property IBOutlet NSButton *radio8;
@property IBOutlet NSButton *radio16;
@property IBOutlet NSButton *radio24;
@property IBOutlet NSButton *radio32;
@property IBOutlet NSButton *radio48;
@property IBOutlet NSButton *radio64;
@property IBOutlet NSButton *radio128;
@property IBOutlet NSButton *radioCustomNudge;
@property IBOutlet NSButton *radioCustomPush;
@property IBOutlet NSButton *radioCustomShove;
@property IBOutlet NSTextField *textCustomNudge;
@property IBOutlet NSTextField *textCustomPush;
@property IBOutlet NSTextField *textCustomShove;
@property IBOutlet NSStepper *stepperCustomNudge;
@property IBOutlet NSStepper *stepperCustomPush;
@property IBOutlet NSStepper *stepperCustomShove;
/* End of view bindings */


@end

@implementation UniformNibOwner
@end
