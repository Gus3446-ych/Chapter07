//
//  RCTNativeInfoModule.m
//  Chapter07
//
//  Created by 윤창현 on 3/4/26.
//

#import "RCTNativeInfoModule.h"

@implementation RCTNativeInfoModule

// 모듈 이름을 내보내기 위한 매크로
RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSDictionary *)constantsToExport
{
  return @{
    @"appVersion" : [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"] ?: [NSNull null],
    @"buildVersion" : [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"] ?: [NSNull null],
    @"bundleIdentifier": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleIdentifier"] ?: [NSNull null],
    @"currentDevice" : [[UIDevice currentDevice] name] ?: [NSNull null]
  };
}

@end
