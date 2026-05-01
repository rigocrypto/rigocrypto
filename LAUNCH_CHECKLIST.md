# GMX Labs Launch Checklist

Launch status model used in this file:
- Done
- Needs Fix
- Blocked
- Not Applicable

Audit date: 2026-05-01
Current release decision: Soft No-Go

## 1. Replace Placeholder Values
- Done: Site URL placeholder replacement in runtime files.
- Done: OG image URL placeholder replacement in runtime files.
- Done: Contact email placeholder replacement in runtime files.
- Done: Phone placeholder replacement in runtime files.
- Done: Social links in JSON-LD are real profiles.
- Done: Twitter handle in metadata is set.
- Needs Fix: Calendly links require production click validation.

## 2. OG Preview Asset
- Done: File exists at public/og/gmx-labs-preview.jpg.
- Needs Fix: Confirm dimensions are exactly 1200 x 630.
- Blocked: Confirm asset opens on deployed production URL.

## 3. Domain + Metadata Validation
- Done: title is present and branded in source.
- Done: meta description is present in source.
- Done: canonical is set in source.
- Done: og:url is set in source.
- Done: og:image is set in source.
- Done: twitter:image is set in source.
- Blocked: Validate these values in deployed page source.

## 4. robots + Sitemap Validation
- Done: robots.txt file exists and includes sitemap URL.
- Done: sitemap.xml file exists and contains loc.
- Blocked: Verify /robots.txt returns 200 on deployed URL.
- Blocked: Verify /sitemap.xml returns 200 on deployed URL.
- Blocked: Confirm deployed sitemap loc matches final live domain.

## 5. Functional QA
- Blocked: Test all nav anchor links manually in browser.
- Blocked: Test CTA buttons (email, Calendly, purchase links) in deployed environment.
- Blocked: Test footer links manually.
- Blocked: Confirm no broken routes/assets via devtools network tab.

## 6. Mobile + Browser QA
- Blocked: Validate key breakpoints (mobile/tablet/desktop).
- Blocked: Check typography and button readability on mobile.
- Blocked: Check sticky header behavior on mobile.
- Blocked: Test at least one Chromium browser and one WebKit browser.

## 7. Accessibility + SEO QA
- Needs Fix: Confirm exactly one H1 in final rendered page.
- Needs Fix: Confirm logical H2/H3 hierarchy in rendered page.
- Needs Fix: Confirm meaningful alt text coverage for major images/logo.
- Blocked: Verify keyboard focus visibility manually.
- Done: Language and viewport tags are present in source.

## 8. Performance QA
- Blocked: Lighthouse Performance target 90+ on production URL.
- Blocked: Lighthouse SEO target 95+ on production URL.
- Blocked: Lighthouse Accessibility target 90+ on production URL.
- Blocked: Lighthouse Best Practices target 90+ on production URL.
- Not Applicable: Optimization fallback actions until Lighthouse reveals a gap.

## 9. Search Engine Submission
- Not Applicable: Google Search Console property submission before final Go decision.
- Not Applicable: Bing Webmaster Tools property submission before final Go decision.
- Not Applicable: Sitemap submission before final Go decision.

## 10. Post-Launch Distribution
- Not Applicable: LinkedIn/X/distribution tasks before launch approval.
- Not Applicable: Outreach and conversion monitoring before launch approval.

## Final release decision
Decision: Soft No-Go

Reason:
- Manual QA is incomplete.
- Production smoke testing is incomplete.
- Lighthouse/performance checks are incomplete.
- Checklist sign-off is not fully complete.

Exit criteria to change decision to Go:
1. Deploy production candidate URL.
2. Complete manual functional/mobile/browser smoke test and record results.
3. Run Lighthouse on production URL and meet targets.
4. Re-check links, robots, sitemap, OG preview, canonical values on live site.
5. Update this checklist and QA_REPORT.md with completed evidence.
