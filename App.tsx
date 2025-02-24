/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { View, ScrollView, findNodeHandle, AccessibilityInfo, SafeAreaView } from 'react-native';

import store from './src/reduxComponents/store';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigations';

const App = ({ errors }) => {

  const scrollViewRef = useRef(null);
  const errorRefs = useRef({});

  // Function to scroll to specific error and announce it
  const scrollToError = (fieldName) => {
    const errorNode = errorRefs.current[fieldName];
    if (errorNode && scrollViewRef.current) {
      const reactTag = findNodeHandle(errorNode);
      
      // Scroll to the error
      scrollViewRef.current.scrollToPosition(0, errorNode.measure((x, y, width, height, pageX, pageY) => {
        return pageY;
      }));

      // Announce error to screen reader
      AccessibilityInfo.announceForAccessibility(
        `Error in ${fieldName}: ${errors[fieldName]}`
      );
    }
  };

    // Scroll to first error when errors change
    useEffect(() => {
      if (errors && Object.keys(errors).length > 0) {
        const firstErrorField = Object.keys(errors)[0];
        scrollToError(firstErrorField);
      }
    }, [errors]);
  
    // Helper component to wrap error messages
    const ErrorMessage = ({ fieldName, message }) => (
      <View
        ref={ref => errorRefs.current[fieldName] = ref}
        accessible={true}
        accessibilityLabel={`Error in ${fieldName}: ${message}`}
        accessibilityRole="alert"
      >
        {/* Your error message UI component here */}
      </View>
    );

  return (
    <Provider store={store}>
      <SafeAreaView 
      ref={scrollViewRef}
      accessible={true}
      accessibilityLabel="Form content"
      style={{ flex: 1 }}
      >
        <RootNavigation />
        {errors && Object.entries(errors).map(([fieldName, message]) => (
        <ErrorMessage
          key={fieldName}
          fieldName={fieldName}
          message={message}
        />
      ))}
      </SafeAreaView>
    </Provider>
  );
}

export default App;

// const AccessibleFormWithScroll = ({ errors, children }) => {
//   const scrollViewRef = useRef(null);
//   const errorRefs = useRef({});

//   // Function to scroll to specific error and announce it
//   const scrollToError = (fieldName) => {
//     const errorNode = errorRefs.current[fieldName];
//     if (errorNode && scrollViewRef.current) {
//       const reactTag = findNodeHandle(errorNode);
      
//       // Scroll to the error
//       scrollViewRef.current.scrollToPosition(0, errorNode.measure((x, y, width, height, pageX, pageY) => {
//         return pageY;
//       }));

//       // Announce error to screen reader
//       AccessibilityInfo.announceForAccessibility(
//         `Error in ${fieldName}: ${errors[fieldName]}`
//       );
//     }
//   };

//   // Scroll to first error when errors change
//   useEffect(() => {
//     if (errors && Object.keys(errors).length > 0) {
//       const firstErrorField = Object.keys(errors)[0];
//       scrollToError(firstErrorField);
//     }
//   }, [errors]);

//   // Helper component to wrap error messages
//   const ErrorMessage = ({ fieldName, message }) => (
//     <View
//       ref={ref => errorRefs.current[fieldName] = ref}
//       accessible={true}
//       accessibilityLabel={`Error in ${fieldName}: ${message}`}
//       accessibilityRole="alert"
//     >
//       {/* Your error message UI component here */}
//     </View>
//   );

  

//   return (
//     <ScrollView
//       ref={scrollViewRef}
//       accessible={true}
//       accessibilityLabel="Form content"
//     >
//       {/* Render form fields and wrap error messages */}
//       {children}
//       {errors && Object.entries(errors).map(([fieldName, message]) => (
//         <ErrorMessage
//           key={fieldName}
//           fieldName={fieldName}
//           message={message}
//         />
//       ))}
//     </ScrollView>
//   );
// };

// export default AccessibleFormWithScroll;
