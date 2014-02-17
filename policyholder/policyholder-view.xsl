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
            <div class="map">
                <a target="_new" title="Open a detailed map in a new window">
                    <xsl:attribute name="href">https://maps.google.com/maps?q=<xsl:value-of select="//*[name()='Postcode']"/>
                    </xsl:attribute>
                    <img>
                        <xsl:attribute name="src">https://maps.googleapis.com/maps/api/staticmap?size=100x100&amp;zoom=4&amp;markers=color:white%7Csize:small%7C<xsl:value-of select="//*[name()='Postcode']"/>&amp;sensor=false</xsl:attribute>
                    </img>
                </a>
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
                <a class="action send" href="mailto:{{//*[@name='email']}}" title="Send an email to this address"/>
            </div>
            <div class="property-group phone">
                <span class="property-label">Home phone</span>
                <span class="property-value medium">
                    <xsl:value-of select="//*[name()='ContactNumberHome']"/>
                </span>
                <a class="action call" href="callto:{{//*[name()='ContactNumberHome']}}" title="Call this number"/>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
