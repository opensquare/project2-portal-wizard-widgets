<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" encoding="ISO-8859-1"/>
    <xsl:template match="/">
        <scriptData xmlns="">
            <templateName>Product template</templateName>
            <name><xsl:value-of select="/data/productName"/></name>
            <brand><xsl:value-of select="/data/brand"/></brand>
            <brandAbbreviation><xsl:value-of select="/data/brandAbbreviation"/></brandAbbreviation>
            <productName><xsl:value-of select="/data/productName"/></productName>
            <referenceNumberSequence><xsl:value-of select="concat(/data/referenceNumberSequence, '.', /data/referenceNumberLength)"/></referenceNumberSequence>
            <policyTemplate><xsl:value-of select="/data/policyTemplate"/></policyTemplate>
            <clientTemplate><xsl:value-of select="/data/clientTemplate"/></clientTemplate>
            <insurer><xsl:value-of select="/data/insurer"/></insurer>
            <vendor><xsl:value-of select="/data/vendor"/></vendor>
            <rqWidget><xsl:value-of select="/data/rqWidget"/></rqWidget>
            <cpWidget><xsl:value-of select="/data/cpWidget"/></cpWidget>
            <newBusinessCalc><xsl:value-of select="/data/newBusinessCalc"/></newBusinessCalc>
            <effectiveTime><xsl:value-of select="/data/effectiveTime"/></effectiveTime>
            <expiryTime><xsl:value-of select="/data/expiryTime"/></expiryTime>
            <xsl:copy-of select="/data/addons"/>
        </scriptData>
    </xsl:template>
</xsl:stylesheet>