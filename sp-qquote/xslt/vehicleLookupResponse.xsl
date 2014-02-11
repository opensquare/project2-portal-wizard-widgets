<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="xml" encoding="UTF-8" />
	<xsl:template match="/">
		<vehicle>
            <key><xsl:value-of select="//*[name()='VehicleInstanceKey']"/></key>
            <description><xsl:value-of select="//*[name()='ShortDescription']"/></description>
        </vehicle>
	</xsl:template>
</xsl:stylesheet>