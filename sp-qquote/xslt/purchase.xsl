<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:fn="http://www.w3.org/2005/02/xpath-functions" xmlns:xdt="http://www.w3.org/2005/02/xpath-datatypes">
    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes" omit-xml-declaration="yes"/>
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()[not(name() = 'setVehicleUserParametersResponse') and not(name() = 'getServicePlanResponse') and not(name()='getQuoteResponse') and not(name() = 'saveQuoteResponse')]"/>
            <xsl:apply-templates select=".//*[(//paymentType='single' and name()='SinglePaymentQuotes') or (//paymentType='multiple' and name()='MonthlyPaymentQuotes')]/QuotesPlan[position()=/quote/term]"/>
            <xsl:apply-templates select=".//accessToken"/>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>
