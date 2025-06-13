import { Box } from "@mui/material";

export const SiteBannerEnabled = true;
export const SiteBannerURL = "https://dora.dev/survey/";
export const SiteBannerText = "Take the 2025 DORA Survey!";

/**
 * SiteBanner component.
 *
 * This component renders a banner at the top of the page,
 * which can be used to display important announcements or calls to action.
 *
 * The banner is controlled by the following variables:
 *
 * - `SiteBannerEnabled`: A boolean value that determines whether the banner is displayed.
 * - `SiteBannerURL`: The URL that the banner links to.
 * - `SiteBannerText`: The text that is displayed in the banner.
 *
 * @returns {JSX.Element} The SiteBanner component.
 */
export const SiteBanner = () => {
  if (!SiteBannerEnabled) {
    return ""; // Return an empty string when disabled
  }

  return (
    <Box
      sx={{
        backgroundColor: "#f2e15c",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <>
        <a href={`${SiteBannerURL}`} target="_blank">{SiteBannerText}</a>
      </>
    </Box>
  );
};
