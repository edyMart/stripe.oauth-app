import {
  Box,
  ContextView,
  Divider,
  Inline,
  Link,
} from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";

import BrandIcon from "./brand_icon.svg";

/**
 * This is a view that is rendered in the Stripe dashboard homepage.
 * In stripe-app.json, this view is configured with stripe.dashboard.home.overview viewport.
 * You can add a new view by running "stripe apps add view" from the CLI.
 */
const Home = ({ userContext, environment }: ExtensionContextValue) => {
  return (
    <ContextView
      title="Dashboard homepage"
      brandColor="#F6F8FA" // replace this with your brand color
      brandIcon={BrandIcon} // replace this with your brand icon
      externalLink={{
        label: "Stripe Apps docs",
        href: "https://stripe.com/docs/stripe-apps",
      }}
      footerContent={
        <>
          <Box css={{ marginBottom: "medium" }}>
            Questions? Get help with your app from the {" "}
            <Link
              external
              href="https://support.stripe.com/"
              target="_blank"
              type="secondary"
            >
              Stripe Support
            </Link>
            , or the{" "}
            <Link
              external
              href="https://discord.com/invite/stripe"
              target="_blank"
              type="secondary"
            >
              Stripe Developers Discord
            </Link>
            .
          </Box>
        </>
      }
    >
      <Box css={{ stack: "y", rowGap: "large" }}>
        <Box>
          <Box css={{ font: "heading" }}>Welcome to VTEX Payments Plugin V2</Box>
          This App is a Oauth V2 App and work with VTEX account{" "}
        </Box>
        <Box css={{ whiteSpace: "break-spaces" }}>
          1. <Link external href="https://vtex.com/us-en/about-us/" target="_blank" type="secondary">About VTEX</Link>
          2. <Link external href="https://sites.google.com/vinneren.com.mx/documentacion-publica/home" target="_blank" type="secondary">About this APP</Link>
        </Box>
        <Divider />
      </Box>
    </ContextView>
  );
};

export default Home;
