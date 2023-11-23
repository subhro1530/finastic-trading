// Footer.js
import React, { useState, useEffect } from "react";
import { Box, VStack, HStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <HStack backgroundColor="black" color="white" height="37rem" width="100dvw">
      <Box>
        <VStack align="left">
          <Text
            style={{
              margin: "3rem 7rem",
              fontSize: "1.7rem",
              marginBottom: "1rem",
            }}
          >
            DISCLAIMER
          </Text>
        </VStack>
        <VStack
          width="40%"
          fontSize="0.9rem"
          margin="0rem 10.5rem"
          lineHeight="1.1rem"
        >
          <Text>
            The foreign exchange market and currency trading is highly
            speculative in nature and as such, currency prices may become
            extremely volatile. You may sustain a total loss of your funds.
            Foreign exchange trading carries a high level of risk and may not be
            suitable for all investors. Always consult a financial professional
            before making any investment decisions. It is possible you will
            sustain a loss of some or all of your initial investment. No
            representation is being made that any account will or is likely to
            achieve profits or losses. Past performance is not indicative of
            future results. Individual results vary and no representation is
            made that you will or are likely to achieve profits or incur losses
            comparable to those that may be shown. You acknowledge and agree
            that no promise or guarantee of success or profitability has been
            made between you, and Finastic Trading LLC and/or Alex Gonzalez. For
            further information, please review our Terms of Use, Privacy Policy,
            and Risk Disclosures.
          </Text>
          <Text>
            CFTC RULE 4.41- Hypothetical or simulated performance results have
            certain limitations. Unlike an actual performance record, simulated
            results do not represent actual trading. Also, since the trades have
            not been executed, the results may have under-or-over compensated
            for the impact, if any, of certain market factors, including but not
            limited to, lack of liquidity. Simulated trading programs in
            general, are also subject to the fact that they are designed with
            the benefit of hindsight. No representation is being made that any
            account will or is likely to achieve profit or losses similar to
            those depicted on the finastictrading.co website.
          </Text>
          <Text>2023 © All rights reserved. Finastic Trading</Text>
        </VStack>
        <Box align="center" fontSize="large">
          <VStack>
            <HStack align="center" width="100%">
              <FontAwesomeIcon icon={faFileLines} /> <Text>Privacy Policy</Text>
            </HStack>
            <HStack align="center" width="100%">
              <FontAwesomeIcon icon={faFileLines} />{" "}
              <Text>Risk Disclaimer</Text>
            </HStack>
            <HStack align="center" width="100%">
              <FontAwesomeIcon icon={faFileLines} /> <Text>Terms of Use</Text>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </HStack>
  );
};
export default Footer;
