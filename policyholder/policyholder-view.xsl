<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="html" encoding="UTF-8"/>
    <xsl:template match="/">
        <div class="side1">
            <div class="picture Male"/>
        </div>
        <div class="side2">
            <div class="property-group name">
                <span class="property-value clientIndDetails-title auto" title="Title"><xsl:value-of select="//User/TitleName"/></span>
                <span class="property-value clientIndDetails-firstName auto" title="First name"><xsl:value-of select="//User/FirstName"/></span>
                <span class="property-value clientIndDetails-surname auto" title="Surname"><xsl:value-of select="//User/LastName"/></span>
            </div>
                <div class="map">
                    <a href="https://maps.google.com/maps?q={{//*[@name='postalCode']}}" target="_new" title="Open a detailed map in a new window">
                        <img src="https://maps.googleapis.com/maps/api/staticmap?size=100x100&amp;zoom=4&amp;markers=color:white%7Csize:small%7C{{//*[@name='postalCode']}}&amp;sensor=false"/>
                    </a>
                </div>
                <div class="address">
                    <div class="property-group">
                        <span class="property-label">Address</span>
                        <span class="property-value long"><xsl:value-of select="//User/Address/AddressLine1"/></span>
                    </div>
                    <div class="property-group">
                        <span class="property-label"/>
                        <span class="property-value long"><xsl:value-of select="//User/Address/AddressLine2"/></span>
                    </div>
                    <div class="property-group">
                        <span class="property-label"/>
                        <span class="property-value long"><xsl:value-of select="//User/Address/Town"/></span>
                    </div>
                    <div class="property-group">
                        <span class="property-label"/>
                        <span class="property-value long"><xsl:value-of select="//User/Address/County"/></span>
                    </div>
                    <div class="property-group">
                        <span class="property-label">Postcode</span>
                        <span class="property-value address-postalCode-value medium"><xsl:value-of select="//User/Address/Postcode"/></span>
                    </div>
                    <div class="property-group">
                        <span class="property-label"/>
                        <span class="property-value medium"><xsl:value-of select="//User/Address/Country"/></span>
                    </div>
                </div>
                <div class="property-group email">
                    <span class="property-label">Email</span>
                    <span class="property-value medium"><xsl:value-of select="//User/RegisteredEmail"/></span>
                    <a class="action send" href="mailto:{{//*[@name='email']}}" title="Send an email to this address"/>
                </div>
                <div class="property-group phone">
                    <span class="property-label">Home phone</span>
                    <span class="property-value medium"><xsl:value-of select="//User/ContactNumberHome"/></span>
                    <a class="action call" href="callto:{{//*[@name='homePhone']}}" title="Call this number"/>
                </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
