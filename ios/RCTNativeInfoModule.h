//
//  RCTNativeInfoModule.h
//  Chapter07
//
//  Created by 윤창현 on 3/4/26.
//

#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

@interface RCTNativeInfoModule : NSObject <RCTBridgeModule>

@end
