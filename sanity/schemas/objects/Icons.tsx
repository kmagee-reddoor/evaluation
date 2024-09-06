import {
  CogIcon as SanityCogIcon,
  DocumentIcon as SanityDocumentIcon,
  HomeIcon as SanityHomeIcon,
  ImageIcon as SanityImageIcon,
} from '@sanity/icons';
import React from 'react';

// Due to type mismatch we need to wrap this icon components in react componantes and spread props down
const DocumentIcon = (props) => <SanityDocumentIcon {...props} />;
const ImageIcon = (props) => <SanityImageIcon {...props} />;
const CogIcon = (props) => <SanityCogIcon {...props} />;
const HomeIcon = (props) => <SanityHomeIcon {...props} />;

export { CogIcon, DocumentIcon, HomeIcon,ImageIcon };
