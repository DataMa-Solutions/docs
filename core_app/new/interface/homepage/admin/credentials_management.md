---
title: Credentials Management
description: Connect, disconnect, and share external service credentials from your profile and organization dashboard
layout: new-page
scope: Datama/saas
keywords: credentials oauth google sheets bigquery analytics organization share connect
---

<br>

> This page explains how to **connect personal credentials**, **share them with your organization**, and **manage organization credentials** from the Datama dashboard.

<br>

# 1. Personal credentials (User Profile)

Open **Profile** from the dashboard sidebar to manage your own connections.

## 1.1. Available services

The credentials grid lists supported external services (for example **Google Sheet**, **Google BigQuery**, and **Google Analytics 4**). Each card shows:

- Service name and logo
- Connection status (connected or not connected)
- **Connect** when you are not authenticated
- **Disconnect** when you are connected (confirmation dialog)

## 1.2. Share with your organization

If you are an **organization admin** and the service is connected, a **Share** toggle appears on the card. When enabled, your personal credential is shared with the current organization so other members can use workbooks that depend on it.

Turning the toggle off removes the shared credential from the organization (your personal connection remains unless you disconnect).

<br>

# 2. Organization credentials

Open **Organization → Credentials** from the sidebar.

## 2.1. Organization admin

Organization admins see the full service catalogue with organization share status:

- **Connect** — authenticate with your personal account; the credential is shared with the organization automatically after a successful connection.
- **Share** — share an already connected personal credential without reconnecting.
- **Unshare** — remove a shared credential from the organization (confirmation dialog). Other members lose access to that shared connection.

Shared cards display the avatar of the admin who shared the credential.

## 2.2. Organization member (non-admin)

Members see only credentials that have been shared with the organization. If nothing is shared yet, an empty-state message is shown.

Members cannot connect, share, or unshare organization credentials.

<br>

# 3. Using credentials in Prep

Once connected (personally or via an organization share), credentials are available when configuring Prep source blocks that require external authentication. Select **User** or **Organization** as the credential source in the source form.

<br>

# 4. Related documentation

- [Organization Management]({{site.url}}/{{site.baseurl}}/core_app/new/interface/homepage/admin/organization_management.html) — team, subscriptions, and organization profile.
- [OpenAI credentials]({{site.url}}/{{site.baseurl}}/core_app/new/integration/AI/OpenAi-connect.html) — connect your own OpenAI API key.
- [Add a source in Prep]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/add_source.html) — connector-specific setup steps.

<br>

This documentation is regularly updated. If you have questions, feel free to reach out!
