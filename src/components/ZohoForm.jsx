import React from "react";
import PropTypes from "prop-types";

import "./ZohoForm.scss";

const zohoString = `
<div id='crmWebToEntityForm' style='margin:auto;'>
<META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
<form action='https://platform.zoho.com/crm/WebToLeadForm' name='WebToLeads4480440000000247031' method='POST' enctype='multipart/form-data' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory4480440000000247031()' accept-charset='UTF-8'>
<input class="hidden" type='text' style='display:none;' name='xnQsjsdp' value='38ba8f6255d2c5eebbda5a355596913ad288491f48f84f5c2b25518a3aba30da'></input>
<input class="hidden" type='hidden' name='zc_gad' id='zc_gad' value=''></input>
<input class="hidden" type='text' style='display:none;' name='xmIwtLD' value='1f76f2aed5ba4fcb9d24a9bf427b4c849bcd05a5966f1e75f24147cbb04d147b'></input>
<input class="hidden" type='text'  style='display:none;' name='actionType' value='TGVhZHM='></input>
<input class="hidden" type='text' style='display:none;' name='returnURL' value='https://5fa80ccb4488240007fb726a--cocky-volhard-2f84e8.netlify.app/' > </input>
<!-- Do not remove this code. -->
<style>
#crmWebToEntityForm tr , #crmWebToEntityForm td {
padding:6px;
border-spacing:0px;
border-width:0px;
}</style>
<table class="form-container" style='color:black'><tr><td colspan='2' align='left' style='color:black;font-family:Arial;font-size:14px;word-break: break-word;'><strong>Mortgage Referral Webform - English</strong></td></tr><tr><td  style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%;'>Who is referring this lead?<span style='color:red;'>*</span></td><td style='width:40%;' ><input class="form-input" type='text' style='width:100%;box-sizing:border-box;'  maxlength='255' name='LEADCF155' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span class="tooltip-trigger" title='Please enter your name &#x28;name of the mortgage broker referring this lead to Hedg&#x29;' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span><div class="tooltip-content">Please enter your name &#x28;name of the mortgage broker referring this lead to Hedg&#x29;</div></td><tr><td  style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%;'>Client Last Name<span style='color:red;'>*</span></td><td style='width:40%;' ><input class="form-input" type='text' style='width:100%;box-sizing:border-box;'  maxlength='80' name='Last Name' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Please enter the last name of your client to be contacted by Hedg.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%;'>Client First Name<span style='color:red;'>*</span></td><td style='width:40%;' ><input class="form-input" type='text' style='width:100%;box-sizing:border-box;'  maxlength='40' name='First Name' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Please enter the first name of your client to be contacted by Hedg.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%;'>Phone<span style='color:red;'>*</span></td><td style='width:40%;' ><input class="form-input" type='text' style='width:100%;box-sizing:border-box;'  maxlength='30' name='Phone' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Primary phone to contact your client.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%;'>Email</td><td style='width:40%;' ><input class="form-input" type='text' style='width:100%;box-sizing:border-box;'  maxlength='100' name='Email' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Please enter the last email of your client to be contacted by Hedg.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%;'>Document Language</td><td style='width:40%;'>
<select class="form-input" style='width:100%;box-sizing:border-box;' name='LEADCF22'>
<option value='-None-'>-None-</option>
<option value='English'>English</option>
<option value='Francais'>Francais</option>
</select></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='What language does your client prefer for business&#x3f;  &#x28;English or French&#x29;.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%;'>Mortgage</td><td style='width:40%;' ><input class="form-input" type='text' style='width:100%;box-sizing:border-box;'  maxlength='255' name='LEADCF17' /></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Please enter the total mortgage amount.  Please attach any client documents below.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td  style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%;'>Referral Notes </td><td style='width:40%;'> <textarea class="form-input" name='LEADCF12' maxlength='32000' style='width:100%;'>&nbsp;</textarea></td><td style='width:30%;word-break: break-word; vertical-align: bottom;'><span title='Enter any notes for this referral, such as contacting details or particular needs.' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td><tr><td style='nowrap:nowrap;text-align:left;font-size:12px;font-family:Arial;width:30%;box-sizing:border-box;'>Upload a File</td>
   <td style='padding-top: 10px;width:40%;box-sizing:border-box;'><input type='file' name='theFile' id='theFile' multiple style='width:100%;box-sizing:border-box;font-size:12px;'/><p style='color:black;font-size:11px;padding-left:3px;'>File(s) size limit is 20MB.</p></td>
<td style='width:30%;vertical-align: bottom;'><span title='Please attach up to 3 documents here, up to 20MB &#x28;Mortgage documents, etc.&#x29;' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #ccc; color: #ccc; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; vertical-align: middle;'>?</span></td>
</tr><tr style='display:none;' ><td style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%'>Company</td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='100' name='Company' value='Account&#x20;Name&#x20;-&#x20;To&#x20;Be&#x20;Updated'></input></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%'>Country</td><td style='width:40%;' ><input type='text' style='width:100%;box-sizing:border-box;'  maxlength='100' name='Country' value='Canada'></input></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%'>Lead Status</td><td style='width:40%;'>
<select style='width:100%;box-sizing:border-box;' name='Lead Status'>
<option value='-None-'>-None-</option>
<option selected value='Attempt&#x20;to&#x20;Contact'>Attempt to Contact</option>
</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%'>Lead Sub-Region</td><td style='width:40%;'>
<select style='width:100%;box-sizing:border-box;' name='LEADCF161'>
<option value='-None-'>-None-</option>
<option selected value='Select&#x20;Sub-Region'>Select Sub-Region</option>
</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%'>Lead Source</td><td style='width:40%;'>
<select style='width:100%;box-sizing:border-box;' name='Lead Source'>
<option value='-None-'>-None-</option>
<option value='Select&#x20;Lead&#x20;Source'>Select Lead Source</option>
<option selected value='Referral&#x20;Agreements'>Referral Agreements</option>
</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%'>Lead Sub-Source</td><td style='width:40%;'>
<select style='width:100%;box-sizing:border-box;' name='LEADCF30'>
<option selected value='Select&#x20;Sub-Source'>Select Sub-Source</option>
<option value='-None-'>-None-</option>
</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%'>Rating</td><td style='width:40%;'>
<select style='width:100%;box-sizing:border-box;' name='Rating'>
<option value='-None-'>-None-</option>
<option selected value='Hot'>Hot</option>
<option value='Fair'>Fair</option>
<option value='Cold'>Cold</option>
</select></td><td style='width:30%;'></td></tr><tr style='display:none;' ><td style='word-break: break-word;text-align:left;font-size:12px;font-family:Arial;width:30%'>Service Types</td><td style='width:40%;'>
<select style='width:100%;box-sizing:border-box;' name='LEADCF34' multiple>
<option selected value='Insurance&#x20;-&#x20;Personal'>Insurance - Personal</option>
</select></td><td style='width:30%;'></td></tr>

<tr><td colspan='2' style='text-align:left; padding-top:15px;font-size:12px;'>
<input class="btn btn-primary" style='margin-right: 5px;cursor: pointer;font-size:12px;' id='formsubmit' type='submit' value='Submit This Referral'  ></input> <input class="btn btn-primary" type='reset' name='reset' style='cursor: pointer;font-size:12px;' value='Reset' ></input> </td></tr></table>
<script>
   var mndFileds=new Array('Phone','Last Name','First Name','LEADCF155');
   var fldLangVal=new Array('Phone','Client Last Name','Client First Name','Who is referring this lead?');
var name='';
var email='';

   function checkMandatory4480440000000247031() {
for(i=0;i<mndFileds.length;i++) {
 var fieldObj=document.forms['WebToLeads4480440000000247031'][mndFileds[i]];
 if(fieldObj) {
if (((fieldObj.value).replace(/^s+|s+$/g, '')).length==0) {
if(fieldObj.type =='file')
{
alert('Please select a file to upload.');
fieldObj.focus();
return false;
}
alert(fldLangVal[i] +' cannot be empty.');
         fieldObj.focus();
         return false;
}  else if(fieldObj.nodeName=='SELECT') {
      if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
alert(fldLangVal[i] +' cannot be none.');
fieldObj.focus();
return false;
  }
} else if(fieldObj.type =='checkbox'){
  if(fieldObj.checked == false){
alert('Please accept  '+fldLangVal[i]);
fieldObj.focus();
return false;
  }
}
try {
    if(fieldObj.name == 'Last Name') {
name = fieldObj.value;
     }
} catch (e) {}
   }
}
return validateFileUpload();

document.getElementById('formsubmit').disabled=true;
}function validateFileUpload(){
var uploadedFiles = document.getElementById('theFile');
var totalFileSize =0;
if(uploadedFiles.files.length >3){
alert('You can upload a maximum of three files at a time.');
return false;
}
if ('files' in uploadedFiles) {
if (uploadedFiles.files.length != 0) {
for (var i = 0; i < uploadedFiles.files.length; i++) {
var file = uploadedFiles.files[i];
if ('size' in file) {
totalFileSize = totalFileSize + file.size;
}
}
if(totalFileSize > 20971520){
alert('Total file(s) size should not exceed 20MB.');
return false;
}
}
}
}
</script>
</form>
</div>`

const ZohoForm = () => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: zohoString }} />
    </>
  );
};

export default ZohoForm;
