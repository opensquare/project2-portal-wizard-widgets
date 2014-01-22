<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="ISO-8859-1"/>
    <xsl:template match="/">
        <calcData xmlns="">
            <bodyType>Hatchback</bodyType>
            <fuelType><xsl:value-of select="/quote/vehicle/fuel"/></fuelType>
            <vehicleAge>
                <xsl:value-of select="/quote/vehicle/vehicleAge"/>
            </vehicleAge>
            <annualMileage>10000</annualMileage>
        </calcData>
    </xsl:template>
</xsl:stylesheet>