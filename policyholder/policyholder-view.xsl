<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="html" encoding="UTF-8"/>
    <xsl:template match="/">
        <div class="side1">
            <div class="picture Male"/>
        </div>
        <div class="side2">
            <div class="property-group name">
                <span class="property-value clientIndDetails-title auto" title="Title">
                    <xsl:value-of select="//*[name()='TitleName']"/>
                </span>
                <span class="property-value clientIndDetails-firstName auto" title="First name">
                    <xsl:value-of select="//*[name()='FirstName']"/>
                </span>
                <span class="property-value clientIndDetails-surname auto" title="Surname">
                    <xsl:value-of select="//*[name()='LastName']"/>
                </span>
            </div>
            <div class="address">
                <div class="property-group">
                    <span class="property-label">Address</span>
                    <span class="property-value long">
                        <xsl:value-of select="//*[name()='AddressLine1']"/>
                    </span>
                </div>
                <div class="property-group">
                    <span class="property-label"/>
                    <span class="property-value long">
                        <xsl:value-of select="//*[name()='AddressLine2']"/>
                    </span>
                </div>
                <div class="property-group">
                    <span class="property-label"/>
                    <span class="property-value long">
                        <xsl:value-of select="//*[name()='Town']"/>
                    </span>
                </div>
                <div class="property-group">
                    <span class="property-label"/>
                    <span class="property-value long">
                        <xsl:value-of select="//*[name()='County']"/>
                    </span>
                </div>
                <div class="property-group">
                    <span class="property-label">Postcode</span>
                    <span class="property-value address-postalCode-value medium">
                        <xsl:value-of select="//*[name()='Postcode']"/>
                    </span>
                </div>
                <div class="property-group">
                    <span class="property-label"/>
                    <span class="property-value medium">
                        <xsl:value-of select="//*[name()='Country']"/>
                    </span>
                </div>
            </div>
            <div class="property-group email">
                <span class="property-label">Email</span>
                <span class="property-value medium">
                    <xsl:value-of select="//*[name()='RegisteredEmail']"/>
                </span>
            </div>
            <div class="property-group phone">
                <span class="property-label">Home phone</span>
                <span class="property-value medium">
                    <xsl:value-of select="//*[name()='ContactNumberHome']"/>
                </span>
            </div>
            <div class="property-group phone">
                <span class="property-label">Mobile phone</span>
                <span class="property-value medium">
                    <xsl:value-of select="//*[name()='ContactNumberMobile']"/>
                </span>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
