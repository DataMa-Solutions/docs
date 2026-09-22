---
title: Organization Management
description: Create and manage your Datama organization — profile, subscriptions, team members, and organization deletion
layout: new-page
scope: Datama/saas
keywords: organization team members admin subscriptions create delete removal
---

<br>

> This page explains how to **create an organization**, view **organization information**, **manage your team**, and **delete an organization** from the Datama dashboard.

<br>

# 1. Create an organization

If you do not belong to an organization yet, the sidebar shows a single **Organization** entry that opens the create page.

On this page you can:

- Read why creating an organization is useful (collaboration, licenses, members).
- Enter an **organization name** and click **Create organization**.
- See a preview of **personal subscriptions** that will be transferred to the organization when you create it (read-only list).

After a successful creation, your account is refreshed and you are redirected to **Organization informations**.

<br>

# 2. Organization informations

Organization admins and members can open **Organization → Informations** from the sidebar.

## 2.1. Profile

- **Avatar** — Organization admins can upload a new image (PNG, JPEG, or WebP, up to 2 MB). Hover the avatar and pick a file.
- **Name** — Organization admins can edit the name inline; changes are saved when you leave the field.
- **Dates** — Creation date (admins) and your **member since** date are shown for context.

## 2.2. Subscriptions

A table lists **active organization subscriptions** (solution, context, start and end dates).

Organization admins can share subscriptions with team members from this page. Non-admin members see the table in read-only mode.

## 2.3. Remove organization

Organization admins can permanently delete the organization from the **Remove organization** button.

A confirmation dialog shows:

- The organization name and an irreversible warning.
- **Shared workbooks** that will no longer be accessible via the organization (workbooks are unshared, not deleted).
- **Organization subscriptions** that will transfer to you as the deleting admin; other members lose access.

If there are no shared assets, a simple confirmation message is shown instead.

After a successful deletion, your account is refreshed and you are redirected to the **create organization** page.

<br>

# 3. Manage your team

Open **Organization → Team** to see all members.

## 3.1. Members table

The table shows name, email, shared subscriptions, member since, status (active or pending invite), and admin flag.

Use the search box to filter members.

## 3.2. Organization admin actions

If you are an **organization admin**, you can:

- **Invite** a member by email (pending until they accept).
- **Toggle admin** for active members (you cannot remove the last active admin or change your own admin status).
- **Remove** a member using the trash action on their row. A dedicated dialog lets you:
  - Choose which **organization admin** inherits the member's shared workbooks and subscription shares.
  - Select, one by one, which workbooks and subscriptions to transfer. Non-selected assets stay with the removed member but are unshared from the organization.
  - Confirm removal when no inheritable assets exist (simple confirmation only).

You cannot remove yourself. Bulk member deletion is not supported.

Non-admin members see the table in **read-only** mode.

<br>

# 4. Related documentation

- [Workbook limits]({{site.url}}/{{site.baseurl}}/core_app/new/interface/homepage/admin/workbook_limits.html) — quotas, shared workbooks, and member capacity.
- [Account types]({{site.url}}/{{site.baseurl}}/core_app/new/interface/account.html) — admin vs non-admin capabilities.

<br>

This documentation is regularly updated. If you have questions, feel free to reach out!
