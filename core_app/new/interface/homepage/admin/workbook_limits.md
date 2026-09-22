---
title: Workbook Limits
description: Understand how workbook limits work in your Datama organization
layout: new-page
scope: Datama/saas
keywords: workbook limits organization admin usage
---

<br>

> This page explains how **workbook limits** work in Datama and how they are calculated for your organization.

<br>

# **Understanding Workbook Limits**

Datama uses a system of workbook limits to manage usage within organizations. 
Read this documentation to understand how this works.

<br>

## **1. Types of Workbooks**

There are two main types of workbooks, each with their own limit system:

### **1.1 Individual Workbooks**
- **Ownership**: Belong to a specific user
- **Visibility**: Only visible to their owner
- **Purpose**: Personal analysis and development work
- **Storage**: Private to each user account

### **1.2 Shared Workbooks**
- **Ownership**: Shared at organization level
- **Visibility**: Visible to all organization members
- **Purpose**: Collaboration and team sharing. 
- **Storage**: Organization-wide access

There are two types of workbooks that Datama enforce you to share with the organization: 

#### **1.2.1 Exported Workbooks**

Those are workbooks on which an export has been scheduled (e.g. slack or email notification)

- **Ownership**: Individual workbooks that become shared when exported
- **Visibility**: Become visible to all organization members once exported
- **Purpose**: Sharing analysis results, scheduled exports, automated reporting
- **Storage**: Move from individual to shared pool when exported

#### **1.2.2 Workbooks created from extensions**

Those are workbooks that have been created using the full web app extension logic (only available in Tableau Dashboard and in Power BI).
Note that this doesn't apply to marketplace (aka light) extension use cases, which are totally separated from the logic of workbooks limitations.

- **Ownership**: Individual workbooks created in Data viz extension environement, that become shared when saved the first time
- **Visibility**: Become visible to all organization members, in the "from extension" folder
- **Purpose**: Make Datama analysis available to all people accessing the data viz environment, using the web app extension with advanced settings
- **Storage**: Shared pool in "From extension" folder when saved

<br>

## **2. How Limits Are Calculated**

Your organization has a central quota that determines how many workbooks can be used across the organization and how many members can be invited in the organization.
By default, this quota is set to 10.
You can increase that limit on request to your Customer Success Manager.

### **2.1 Team member Quota**

Your quota limit the number of people you can invite into your organization. 
Organization admins can manage who is invited and send/ remove members.
When a member is removed from the organization, its worbooks are automatically reattributed to the admin of the organization.

### **2.2 Individual Workbook Limits**
Each active member in your organization can create a certain number of individual workbooks. This limit is calculated by multiplying the organization's shared workbook quota by the number of active members.

**Example**: With an organization quota of 10 and 4 active members:
- **Total individual workbooks allowed**: 10 × 4 = **40 workbooks**
- Each member can create up to 10 personal workbooks

### **2.3 Shared Workbook Limits**  
The organization can have a maximum number of shared workbooks equal to the organization's quota.

**Example**: With an organization quota of 10:
- **Maximum shared workbooks**: **10 workbooks**
- This includes workbooks that are directly shared and workbooks that become shared through exports

<br>

## **3. Practical Example**

Let's see how this works in practice:

**Organization Setup (based on the example shown):**
- Organization quota = 10 
- 1 active member

**Calculated Limits:**
- **Individual workbooks**: 10 × 1 = **10 maximum per member**
- **Shared workbooks**: **10 maximum for the organization**
- **Current usage**: 3/10 shared workbooks, 7/10 individual workbooks

<br>

## **4. Member Status Impact**

### **4.1 Active vs Pending Members**
Only **active members** count toward limit calculations:

- ✅ **Active members**: Can create workbooks, count in calculations
- ⏳ **Pending members**: Cannot create workbooks, don't count in limits

### **4.2 Dynamic Limit Updates**
When team size changes, limits update automatically:
- **New active member joins**: Individual limit pool increases
- **Member becomes inactive**: Limits adjust accordingly

<br>

## **5. Usage Monitoring**

### **5.1 Organization Infos Dashboard**

Administrators can monitor workbook usage in the **Organization > Informations** section. You'll find three key usage indicators:

**Quotas section displays:**

1. **"Shared + Extension Workbooks"**
   - Shows the number of shared workbooks used compared to your organization quota
   - Example: "3/10" (3 shared workbooks out of 10 allowed)
   - This is the green progress bar in your dashboard

2. **"Workbooks"** (Individual workbooks)
   - Shows total individual workbooks used across all members compared to total capacity
   - Example: "7/10" (7 individual workbooks out of 10 total capacity)
   - This appears as a red progress bar when approaching or at limits

3. **"Members"**
   - Shows active members compared to organization capacity
   - Example: "1/10" (1 active member, capacity for 9 more)
   - This is the green progress bar showing team capacity

### **5.2 Workbooks Page View**

On the main workbooks page, you can also see your current usage displayed as:
- **"7 / 10 (max. 10)"** format
- This shows: current_workbooks / individual_limit (max. org_capacity)

<br>

## **6. What Happens When Limits Are Reached**

### **6.1 Individual Limit Reached**
- User cannot create new personal workbooks
- Can still edit existing workbooks
- Can still access shared workbooks

### **6.2 Shared Limit Reached**
- No new workbooks can be shared within the organization
- **Cannot export workbooks** (since exported workbooks become shared)
- No new extension workbooks can be created
- Existing shared workbooks remain accessible

### **6.3 Upgrading Limits**
Organization administrators can:
- Contact support to increase organization quota
- Upgrade organization plan for higher limits
- Remove inactive workbooks to free up space

<br>

## **7. Best Practices**

### **7.1 For Administrators**
- Regularly monitor usage through the admin dashboard
- Remove obsolete shared workbooks to free up space
- Plan team growth considering workbook capacity
- Set clear guidelines for sharing vs individual workbooks

### **7.2 For Users**
- Use individual workbooks for personal analysis
- Only share workbooks that benefit the whole team
- Regularly clean up unused personal workbooks
- Communicate with admin when approaching limits

<br>

## **8. Frequently Asked Questions**

**Q: Why can't I create a new workbook?**  
A: You may have reached either your individual limit or the organization's shared workbook limit. Check the usage counters in your dashboard.

**Q: Why can't I export my workbook?**  
A: When you export a workbook, it becomes shared and counts against the organization's shared workbook quota. If this quota is reached, exports are blocked.

**Q: Do deleted workbooks immediately free up space?**  
A: Yes, deleted workbooks immediately reduce your usage count and free up capacity.

**Q: Can I convert a shared workbook back to individual?**  
A: No, once a workbook is shared, it remains in the shared pool. You can create a copy as an individual workbook instead.

**Q: How often do limits update when team members join or leave?**  
A: Limits update immediately when member status changes from pending to active or vice versa.

**Q: Where can I see my current usage?**  
A: Go to **Organization > Informations** to see the three usage bars, or check the workbooks page for your individual count.

<br>

---

For questions about increasing your organization's workbook limits, please contact our support team! 🚀
