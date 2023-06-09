<aura:application extends="ltng:outApp" access="GLOBAL" implements="ltng:allowGuestAccess" extensible="force:slds">
<aura:attribute name="RecordId" type="String" />
<c:Signature recordId="{!v.RecordId}"></c:Signature>

</aura:application>	
