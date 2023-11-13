import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import {styles} from './PrivacyPolicyStyle';
import PrivacyPolicyHooks from './PrivacyPolicyHooks';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import {Colors} from '../../global';

const PrivacyPolicyScreen = () => {
  const {handleGoBack} = PrivacyPolicyHooks();
  return (
    <View style={styles.mainView}>
      <FocusAwareStatusBar barColor={Colors.WHITE} />
      <SearchAppBar title={'Terms & Policies'} onPress={handleGoBack} />
      <ScrollView style={styles.scrollChanges}>
        <Text style={styles.header}>PRIVACY POLICY</Text>
        <Text style={styles.text}>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          www.rangeplus.com (the “Site”).{'\n'}
          {'\n'}
          Personal information we collect When you visit the Site, we
          automatically collect certain information about your device, including
          information about your web browser, IP address, time zone, and some of
          the cookies that are installed on your device. Additionally, as you
          browse the Site, we collect information about the individual web pages
          or products that you view, what websites or search terms referred you
          to the Site, and information about how you interact with the Site. We
          refer to this automatically-collected information as “Device
          Information”.
          {'\n'}
          {'\n'}
          We collect Device Information using the following technologies: -
          “Cookies” are data files that are placed on your device or computer
          and often include an anonymous unique identifier. For more information
          about cookies, and how to disable cookies, visit
          http://www.allaboutcookies.org. - “Log files” track actions occurring
          on the Site, and collect data including your IP address, browser type,
          Internet service provider, referring/exit pages, and date/time stamps.
          - “Web beacons”, “tags”, and “pixels” are electronic files used to
          record information about how you browse the Site.
          {'\n'}
          {'\n'}
          Additionally when you make a purchase or attempt to make a purchase
          through the Site, we collect certain information from you, including
          your name, billing address, shipping address, payment information
          (including credit card numbers or bank account details) email address,
          and phone number. We refer to this information as “Order Information”.
          {'\n'}
          {'\n'}
          When we talk about “Personal Information” in this Privacy Policy, we
          are talking both about Device Information and Order Information.
          {'\n'}
          {'\n'}
          How do we use your personal information? We use the Order Information
          that we collect generally to fulfill any orders placed through the
          Site (including processing your payment information, arranging for
          shipping, and providing you with invoices and/or order confirmations).
          Additionally, we use this Order Information to: - Communicate with
          you; - Screen our orders for potential risk or fraud; and - When in
          line with the preferences you have shared with us, provide you with
          information or advertising relating to our products or services.
          {'\n'}
          {'\n'}
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site (for example, by generating
          analytics about how our customers browse and interact with the Site,
          and to assess the success of our marketing and advertising campaigns).
          {'\n'}
          {'\n'}
          Sharing you personal Information We share your Personal Information
          with third parties to help us use your Personal Information, as
          described above. For example, we use Shopify to power our online
          store--you can read more about how Shopify uses your Personal
          Information here: https://www.shopify.com/legal/privacy. We also use
          Google Analytics to help us understand how our customers use the Site
          -- you can read more about how Google uses your Personal Information
          here: https://www.google.com/intl/en/policies/privacy/. You can also
          opt-out of Google Analytics here:
          https://tools.google.com/dlpage/gaoptout.
          {'\n'}
          {'\n'}
          Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.
          {'\n'}
          {'\n'}
          Behavioural advertising As described above, we use your Personal
          Information to provide you with targeted advertisements or marketing
          communications we believe may be of interest to you. For more
          information about how targeted advertising works, you can visit the
          Network Advertising Initiative’s (“NAI”) educational page at
          http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
          {'\n'}
          {'\n'}
          You can opt out of targeted advertising by using the links below: -
          Facebook: https://www.facebook.com/settings/?tab=ads - Google:
          https://www.google.com/settings/ads/anonymous - Bing:
          https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
          Additionally, you can opt out of some of these services by visiting
          the Digital Advertising Alliance’s opt-out portal at:
          http://optout.aboutads.info/.
          {'\n'}
          {'\n'}
          Do not track Please note that we do not alter our Site’s data
          collection and use practices when we see a Do Not Track signal from
          your browser.
          {'\n'}
          {'\n'}
          Your rights If you are a European resident, you have the right to
          access personal information we hold about you and to ask that your
          personal information be corrected, updated, or deleted. If you would
          like to exercise this right, please contact us through the contact
          information below.
          {'\n'}
          {'\n'}
          Additionally, if you are a European resident we note that we are
          processing your information in order to fulfill contracts we might
          have with you (for example if you make an order through the Site), or
          otherwise to pursue our legitimate business interests listed above.
          Additionally, please note that your information will be transferred
          outside of Europe, including to Canada and the United States.
          {'\n'}
          {'\n'}
          Data retention When you place an order through the Site, we will
          maintain your Order Information for our records unless and until you
          ask us to delete this information.
          {'\n'}
          {'\n'}
          Changes We may update this privacy policy from time to time in order
          to reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
          {'\n'}
          {'\n'}
          Contact us For more information about our privacy practices, if you
          have questions, or if you would like to make a complaint, please
          contact us by e‑mail at support@rangeplus.com or by mail using the
          details provided below:
          {'\n'}
          {'\n'}
          RangePlus.com [Re: Privacy Compliance Officer] RangePlus Limited, Unit
          2 Pilton Industrial Estate, 46 Pitlake, Croydon, CR0 3RA, United
          Kingdom
        </Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;