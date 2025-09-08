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

Datama uses a system of workbook limits to manage usage within organizations. There are two main types of workbooks, each with their own limit system:

<br>

## **1. Types of Workbooks**

### **1.1 Individual Workbooks**
- **Ownership**: Belong to a specific user
- **Visibility**: Only visible to their owner
- **Purpose**: Personal analysis and development work
- **Storage**: Private to each user account

### **1.2 Shared Workbooks**
- **Ownership**: Shared at organization level
- **Visibility**: Visible to all organization members
- **Purpose**: Collaboration and team sharing
- **Storage**: Organization-wide access

### **1.3 Extension Workbooks (Export-enabled)**
- **Ownership**: Shared workbooks with export capabilities
- **Visibility**: Visible to all organization members
- **Purpose**: Scheduled exports, automated reporting
- **Storage**: Organization-wide with export configuration

<br>

## **2. How Limits Are Calculated**

### **2.1 The Central Multiplier**

Your organization has a central limit called `shared_workbooks_limit` that acts as a **multiplier** for all workbook calculations.

### **2.2 Individual Workbook Limits**
**Formula**: `shared_workbooks_limit × number_of_active_members`

**Example**: With a `shared_workbooks_limit` of 10 and 4 active members:
- **Total individual workbooks**: 10 × 4 = **40 workbooks**
- Each member can create up to 10 personal workbooks

### **2.3 Shared Workbook Limits**  
**Formula**: `shared_workbooks_limit` (direct value)

**Example**: With a `shared_workbooks_limit` of 10:
- **Maximum shared/exported workbooks**: **10 workbooks**
- This includes both shared workbooks and extension workbooks combined

<br>

## **3. Practical Example**

Let's see how this works in practice:

**Organization Setup (based on the example shown):**
- `shared_workbooks_limit` = 10 
- 1 active member

**Calculated Limits:**
- **Individual workbooks**: 10 × 1 = **10 total** 
- **Shared + Extension workbooks**: **10 maximum**
- **Current usage**: 3/10 shared workbooks, 12/10 individual workbooks (over limit - shown in red)

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
   - Shows: `used_shared_workbooks / shared_workbooks_limit`
   - Example: "3/10" (3 shared workbooks out of 10 allowed)
   - This is the green progress bar in your dashboard

2. **"Workbooks"** (Individual workbooks)
   - Shows: `total_individual_workbooks / (shared_workbooks_limit × active_members)`
   - Example: "12/10" (12 individual workbooks - shown in red when over limit)
   - This appears as the red progress bar when limits are exceeded

3. **"Members"**
   - Shows: `active_members / shared_workbooks_limit`
   - Example: "1/10" (1 active member, capacity for 9 more)
   - This is the green progress bar showing team capacity

### **5.2 Workbooks Page View**

On the main workbooks page, you can also see your current usage displayed as:
- **"7 / 12 (max. 50)"** format
- This shows: current_workbooks / individual_limit (max. total_org_capacity)

<br>

## **6. What Happens When Limits Are Reached**

### **6.1 Individual Limit Reached**
- User cannot create new personal workbooks
- Can still edit existing workbooks
- Can still access shared workbooks

### **6.2 Shared Limit Reached**
- No new workbooks can be shared within the organization
- No new extension workbooks can be created
- Existing shared workbooks remain accessible

### **6.3 Upgrading Limits**
Organization administrators can:
- Contact support to increase `shared_workbooks_limit`
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
