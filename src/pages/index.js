import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Structure } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Structure cells-number="9" grid-template-rows="minmax(min-content, max-content)" grid-auto-rows="minmax(min-content, max-content)" grid-template-columns="repeat(12, 1fr)">
			<Override slot="Cell 0" grid-column="1 / span 6" />
			<Override slot="Cell 1" grid-column="7 / span 6" />
			<Override slot="Cell 2" grid-column="1 / span 4" />
			<Override slot="Cell 3" grid-column="5 / span 4" />
			<Override slot="Cell 4" grid-column="9 / span 4" />
			<Override slot="Cell 5" grid-column="1 / span 3" />
			<Override slot="Cell 6" grid-column="4 / span 3" />
			<Override slot="Cell 7" grid-column="7 / span 3" />
			<Override slot="Cell 8" grid-column="10 / span 3" />
		</Structure>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"612cc5e55aad94001eb5962a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});