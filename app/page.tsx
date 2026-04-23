"use client";

import {
  Deck,
  Slide,
  Title,
  Subtitle,
  Text,
  Highlight,
  Code,
  Quote,
  List,
  Image,
  Footer,
  Columns,
  Browser,
} from "@sambego/diorama";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-json.min.js";

export default function Home() {
  const primary = "#a3be8c";
  const foreground = "#000";
  return (
    <Deck
      footer={
        <Footer
          left={
            <Highlight color={primary} style={{ color: foreground }}>
              @sambego
            </Highlight>
          }
          right={
            <Highlight color={primary} style={{ color: foreground }}>
              bearer.sambego.tech
            </Highlight>
          }
        />
      }
    >
      <Slide style={{ background: primary, color: foreground }}>
        <Title
          style={{
            position: "relative",
            zIndex: 1,
            letterSpacing: "5px",
          }}
        >
          Bearer of
          <br />
          <span style={{ position: "relative" }}>
            Bad
            <span
              style={{
                height: "1.4rem",
                position: "absolute",
                top: "50%",
                left: "-1rem",
                right: "-1rem",
                background: "#000",
              }}
            ></span>
          </span>{" "}
          Good News!
        </Title>
        <Image
          src="cc.svg"
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            width: "10%",
            zIndex: 2,
            background: primary,
          }}
          alt="Creative commons"
        />
      </Slide>
      <Slide>
        <Subtitle>
          <a
            style={{ color: "#000", borderColor: primary }}
            href="https://bearer.sambego.tech"
          >
            bearer.sambego.tech
          </a>
        </Subtitle>
      </Slide>
      <Slide>
        <List>
          <li>OAuth 2.0</li>
          <li>OAuth 2.1</li>
          <li>DPoP</li>
          <li>CIBA</li>
          <li>Token Exchange</li>
          <li>XAA</li>
        </List>
      </Slide>
      <Slide style={{ background: primary }}>
        <Title
          style={{
            letterSpacing: "4rem",
          }}
        >
          OAuth 2.0
        </Title>
      </Slide>

      <Slide>
        <Text>
          <Highlight>OAuth 2.0</Highlight> is a protocol that allows a user to{" "}
          <Highlight>grant limited access</Highlight> to their resources on one
          site, to another site, without having to expose their credentials.
        </Text>
      </Slide>
      <Slide>
        <Text>
          OAuth issues <Highlight>Access Tokens and Refresh Tokens</Highlight>{" "}
          after a successfull completion of one of it&apos;s flows.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight>OpenID Connect</Highlight> was created as an{" "}
          <Highlight>identity layer for OAuth 2.0</Highlight> because while
          OAuth provides a solid standard for user Authorization, developers
          needed a standard way of expressing user identity.
        </Text>
      </Slide>
      <Slide>
        <Text>
          OIDC issues <Highlight>an ID Token</Highlight> on top of the tokens
          issued by OAuth.
        </Text>
      </Slide>
      <Slide notes="OAuth 2.0 launched in 2012 with good intentions but had significant security gaps.">
        <Title>
          The{" "}
          <span
            style={
              {
                display: "inline-block",
                transformOrigin: "0% 0%",
                "--crack": "15deg",
                animation: "crack 1s forwards",
              } as React.CSSProperties
            }
          >
            Foundation
          </span>
          <br /> Had{" "}
          <Highlight
            style={
              {
                display: "inline-block",
                transformOrigin: "0% 0%",
                paddingTop: 0,
                paddingBottom: 0,
                "--crack": "35deg",
                animation: "crack 1s forwards",
              } as React.CSSProperties
            }
          >
            Cracks
          </Highlight>
        </Title>
      </Slide>
      <Slide notes="First problem: public clients like mobile apps couldn't keep secrets safe.">
        <Title style={{ position: "relative" }}>
          <Highlight>Secrets</Highlight> can leak
          <span
            style={
              {
                position: "absolute",
                top: 0,
                left: 0,
                "--leakX": "80%",
                "--leakOp": 0.6,
                animation: "leak 1s",
                transform: "translate3d(0, var(--leakX), 0)",
                opacity: "var(--leakOp)",
              } as React.CSSProperties
            }
          >
            Secrets
          </span>
          <span
            style={
              {
                position: "absolute",
                top: 0,
                left: 0,
                "--leakX": "160%",
                "--leakOp": 0.3,
                animation: "leak 1s",
                transform: "translate3d(0, var(--leakX), 0)",
                opacity: "var(--leakOp)",
              } as React.CSSProperties
            }
          >
            Secrets
          </span>
          <span
            style={
              {
                position: "absolute",
                top: 0,
                left: 0,
                "--leakX": "240%",
                "--leakOp": 0.1,
                animation: "leak 1s",
                transform: "translate3d(0, var(--leakX), 0)",
                opacity: "var(--leakOp)",
              } as React.CSSProperties
            }
          >
            Secrets
          </span>
        </Title>
      </Slide>
      <Slide>
        <Text>
          <Highlight>Public clients</Highlight> like Single-Page and Mobile
          Applications <br />
          <Highlight>can&apos;t keep a secret</Highlight>.
        </Text>
      </Slide>
      <Slide notes="A client secret is a password your app uses to authenticate itself to the auth server.">
        <Text>
          A <Highlight>Client Secret</Highlight> is like{" "}
          <Highlight>password</Highlight> for your application.
        </Text>
      </Slide>
      <Slide>
        <Text>
          It is <Highlight>sent to the Token endpoint</Highlight> to prove the
          app is <Highlight>legitimate</Highlight>.
        </Text>
      </Slide>
      <Slide notes="The client secret is sent alongside the client ID when exchanging an authorization code for a token.">
        <Code
          lang="bash"
          code={`curl -X POST https://api.example.com/token \\
  -d "grant_type=authorization_code" \\
  -d "code=authorizationCode" \\
  -d "client_id=myapplication" \\
  -d "client_secret=s3cr3t_abc123"`}
        />
      </Slide>
      <Slide>
        <Text>
          Without it, <Highlight>the token endpoint is open</Highlight> to
          anyone that can{" "}
          <Highlight>intercept the authorization code</Highlight>.
        </Text>
        <Text style={{ fontSize: "4rem" }}>
          eg. trough a redirect URI attack
        </Text>
      </Slide>
      <Slide notes="In a SPA or mobile app, the code ships to the user's device — there is nowhere safe to store a secret.">
        <Text>
          Your code <Highlight>ships to the device</Highlight> or{" "}
          <Highlight>browser</Highlight>.
        </Text>
      </Slide>
      <Slide notes="In a SPA or mobile app, the code ships to the user's device — there is nowhere safe to store a secret.">
        <Text>
          <Highlight>JavaScript</Highlight> code can be{" "}
          <Highlight>read</Highlight> by malicious browser extensions, breached
          NPM packages or <Highlight>altered</Highlight> trough XSS attacks.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight>Mobile application</Highlight> packages can be{" "}
          <Highlight>decompiled</Highlight>
          or <Highlight>strings can be extracted</Highlight>.
        </Text>
      </Slide>
      <Slide notes="With the client secret, an attacker can impersonate your app and request tokens on its behalf.">
        <Text>
          With a <Highlight>client secret</Highlight>, <br />
          an attacker can <Highlight>impersonate your app</Highlight>!
        </Text>
      </Slide>
      <Slide notes="Second problem: bearer tokens worked like cash - steal and spend.">
        <Title style={{ position: "relative" }}>
          Whoever{" "}
          <span style={{ position: "relative" }}>
            <Highlight>holds</Highlight>
            <Highlight
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                animation: "bearer 1s",
                opacity: 0,
              }}
            >
              owns
            </Highlight>
          </span>{" "}
          it, <Highlight>owns</Highlight> it!
        </Title>
      </Slide>
      <Slide>
        <Text>
          Access tokens are <Highlight>presented as Bearer Tokens</Highlight>.
        </Text>
        <a
          href="https://datatracker.ietf.org/doc/html/rfc6750"
          title="rfc 6750"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          rfc 6750
        </a>
      </Slide>
      <Slide>
        <Text>
          This means, <Highlight>anybody that can present the token</Highlight>,
          is considered a <Highlight>legitimate consumer</Highlight> if said
          token.
        </Text>
      </Slide>
      <Slide notes="Tokens are sent in the Authorization header on every request — anyone who can read that header has the token.">
        <Code
          lang="bash"
          code={`curl https://api.example.com/api/data \\
  -H "Authorization: Bearer eyJhbGci..."`}
        />
      </Slide>
      <Slide notes="Several common ways an attacker can get hold of a token.">
        <Text>
          Access Tokens get <Highlight>stolen</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Several common ways an attacker can get hold of a token.">
        <List>
          <li>XSS reads it from memory or storage</li>
          <li>Network interception (no HTTPS)</li>
          <li>Leaked logs or error reports</li>
          <li>...</li>
        </List>
      </Slide>
      <Slide notes="The server validates the token signature, not who is presenting it — it cannot tell attacker from legitimate user.">
        <Text>
          The server <Highlight>can&apos;t tell the difference</Highlight>{" "}
          between you and an attacker{" "}
          <Highlight>presenting a valid Bearer token</Highlight>.
        </Text>
      </Slide>
      <Slide notes="The attacker can make API calls as the user until the token expires.">
        <Text>
          This means they can get full access until{" "}
          <Highlight>the token expires</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Fourth problem: configuration was manual copy-paste from docs.">
        <Browser>
          <div
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Title style={{ position: "relative", marginTop: "-10%" }}>
              User must be present <Highlight>at their browser</Highlight>
            </Title>
          </div>
        </Browser>
      </Slide>
      <Slide notes="The standard OAuth flow is synchronous, the user must be present and interacting the whole time.">
        <Text>
          Authorization flows are <Highlight>synchronous</Highlight>, the user
          must actively complete it on the initiating device.
        </Text>
      </Slide>
      <Slide notes="This breaks down in several real-world scenarios.">
        <Text>
          This breaks for call center agents{" "}
          <Highlight>acting on behalf of a customer</Highlight>.
        </Text>
      </Slide>
      <Slide notes="This breaks down in several real-world scenarios.">
        <Text>
          This breaks for IoT devices{" "}
          <Highlight>triggering user approval</Highlight>.
        </Text>
      </Slide>
      <Slide notes="This breaks down in several real-world scenarios.">
        <Text>
          This breaks for high-value transactions{" "}
          <Highlight>needing out-of-band confirmation</Highlight>.
        </Text>
      </Slide>
      <Slide notes="This breaks down in several real-world scenarios.">
        <Text>
          This breaks for autonomous agents needing{" "}
          <Highlight>a supervising human&apos;s approval</Highlight>.
        </Text>
      </Slide>
      <Slide notes="The initiating device and the approving device are different.">
        <Text>
          The <Highlight>device that initiates</Highlight> the flow
          <br /> is not always the <Highlight>
            device that approves
          </Highlight>{" "}
          it.
        </Text>
      </Slide>
      <Slide notes="Device authorization grant is an exeption.">
        <Text>
          The device authorization grant is <Highlight>an exeption</Highlight>.
        </Text>
        <a
          href="https://datatracker.ietf.org/doc/html/rfc8628"
          title="rfc 8628"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          rfc 8628
        </a>
      </Slide>
      <Slide notes="Fourth problem: configuration was manual copy-paste from docs.">
        <Title style={{ position: "relative" }}>
          <Highlight
            style={{
              animation: "click 1s",
              display: "inline-block",
              position: "relative",
            }}
          >
            Manual
            <img
              src="cursor.svg"
              alt="A hand cursor"
              style={{
                position: "absolute",
                right: "-5rem",
                bottom: "-5rem",
                width: "10rem",
                height: "10rem",
              }}
            />
          </Highlight>{" "}
          configuration
        </Title>
      </Slide>
      <Slide>
        <Text>
          <Highlight>Every endpoint needs to be manually configured</Highlight>{" "}
          in your application.
        </Text>
      </Slide>
      <Slide notes="Every endpoint URL had to be read from docs and hardcoded.">
        <Code
          lang="javascript"
          code={`const config = {
  authorization_endpoint:
    'https://example.auth0.com/authorize',
  token_endpoint:
    'https://example.auth0.com/oauth/token',
  jwks_uri:
    'https://example.auth0.com/.well-known/jwks'
};`}
        />
      </Slide>
      <Slide notes="Hardcoded endpoints are fragile — any server-side change breaks every client.">
        <Text>
          <Highlight>
            The{" "}
            <span style={{ fontFamily: "var(--font-geist-mono)" }}>
              /authorize
            </span>{" "}
            and{" "}
            <span style={{ fontFamily: "var(--font-geist-mono)" }}>/token</span>
          </Highlight>{" "}
          endpoints are not standardized by OAuth.
        </Text>
      </Slide>
      <Slide notes="Hardcoded endpoints are fragile — any server-side change breaks every client.">
        <Text>
          <Highlight>
            The{" "}
            <span style={{ fontFamily: "var(--font-geist-mono)" }}>
              .well_known
            </span>
          </Highlight>{" "}
          endpoints are standardized.
        </Text>
      </Slide>
      <Slide notes="Hardcoded endpoints are fragile — any server-side change breaks every client.">
        <Text>
          If the server <Highlight>moves an endpoint</Highlight>, every client{" "}
          <Highlight>breaks</Highlight>.
        </Text>
      </Slide>
      <Slide notes="No standard way to know what grant types or algorithms the server supports.">
        <Text>
          No way to know what the server{" "}
          <Highlight>actually supports</Highlight>.
        </Text>
        <Text>Eg. grant-types, scopes, signing algorithms, PKCE, ...</Text>
      </Slide>
      <Slide>
        <Text>
          Every application needs to be{" "}
          <Highlight>manually configured</Highlight> in your identity provider.
        </Text>
      </Slide>
      <Slide>
        <Text>
          <Highlight>A callback url, origin, logout url</Highlight>, ... needs
          to be <Highlight>manually configured</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          Your identity provider needs to create a{" "}
          <Highlight>client ID & secret</Highlight> for your appliation, which
          you have to <Highlight>manually configure</Highlight> in your
          application.
        </Text>
      </Slide>
      <Slide>
        <Text>
          Manual work is <Highlight>prone to mistakes</Highlight>!
        </Text>
      </Slide>

      <Slide notes="Fourth problem: services passed credentials around unsafely.">
        <Title>
          Credential{" "}
          <Highlight style={{ position: "relative" }}>
            copying
            <Highlight
              style={
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  opacity: 0,
                  transformOrigin: "0px 0px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, .2)",
                  "--copyX": "10%",
                  "--copyY": "-40%",
                  animation: ".3s ease-in copy 0s forwards",
                } as React.CSSProperties
              }
            >
              copying
            </Highlight>
            <Highlight
              style={
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2,
                  opacity: 0,
                  transformOrigin: "0px 0px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, .2)",
                  "--copyX": "20%",
                  "--copyY": "-70%",
                  animation: ".3s ease-in copy .3s forwards",
                } as React.CSSProperties
              }
            >
              copying
            </Highlight>
            <Highlight
              style={
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 3,
                  opacity: 0,
                  transformOrigin: "0px 0px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, .2)",
                  "--copyX": "30%",
                  "--copyY": "-100%",
                  animation: ".3s ease-in copy .6s forwards",
                } as React.CSSProperties
              }
            >
              copying
            </Highlight>
          </Highlight>
          <Text
            style={
              {
                position: "absolute",
                top: "-30%",
                left: "0",
                fontSize: "1.5vw",
                fontWeight: "bold",
              } as React.CSSProperties
            }
          >
            <Highlight>Problem</Highlight>
          </Text>
        </Title>
      </Slide>
      <Slide notes="Service B gets the full token — more access than it needs.">
        <Text>
          Tokens are often copied and{" "}
          <Highlight>forwarded to downstream services</Highlight>.
        </Text>
      </Slide>
      <Slide notes="When Service A calls Service B, it just forwards the user's token.">
        <Code
          lang="bash"
          code={`# Service A calling Service B
# just forwarding the user's token
curl https://b.service.example.com \\
  -H "Authorization: Bearer $USER_TOKEN"`}
        />
      </Slide>
      <Slide notes="Service B gets the full token — more access than it needs.">
        <Text>
          Service B gets <Highlight>full access</Highlight>, not just what
          Service A needs from it. There&apos;s{" "}
          <Highlight>no Fine-Grained Access Control</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Every service in the chain has the same token — violates least privilege.">
        <Text>
          Every service gets <Highlight>the same token</Highlight> with the same
          permissions.
        </Text>
      </Slide>
      <Slide notes="A compromised downstream service can use that token anywhere.">
        <Text>
          A <Highlight>compromised service</Highlight> can use that token{" "}
          <Highlight>anywhere</Highlight>.
        </Text>
      </Slide>
      <Slide notes="No way to tell which service made which API call — the token is the same throughout.">
        <Text>
          No <Highlight>audit trail</Highlight>, every call looks like it came
          from the user.
        </Text>
      </Slide>

      <Slide notes="Problem: App A and App B live in different authorization domains — the user has no token for App B.">
        <Title>
          <Highlight
            style={{
              animation: "1s ease-in silo 0s forwards",
              boxSizing: "border-box",
            }}
          >
            Siloed
          </Highlight>{" "}
          authorization domains
        </Title>
      </Slide>

      <Slide>
        <Text>
          Authorization servers <Highlight>don&apos;t share sessions</Highlight>{" "}
          between them.
        </Text>
      </Slide>
      <Slide>
        <Text>
          For example: app A, a CRM needs to make a{" "}
          <Highlight>call to app B</Highlight>, a billing system.
        </Text>
      </Slide>
      <Slide>
        <Text>
          The CRM and Billing system use{" "}
          <Highlight>2 different authorization servers</Highlight>.
        </Text>
      </Slide>

      <Slide notes="Without a solution, the user would need to log into App B separately.">
        <Text>
          The user must{" "}
          <Highlight>log into the billing service separately</Highlight>.
        </Text>
      </Slide>

      <Slide notes="This is common in enterprise federation, AI agents spanning SaaS products, and multi-tenant platforms.">
        <Text>
          This is a common scenario in{" "}
          <Highlight>
            enterprise federation or AI agents spanning multiple SaaS products
          </Highlight>
        </Text>
      </Slide>

      <Slide>
        <Text>
          The OAuth 2.0 spec dates from <Highlight>2012</Highlight> while the
          OIDC spec was finalized in <Highlight>2014</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          It&apos;s{" "}
          <Highlight
            style={{
              display: "inline-block",
              animation: "1s ease-in explode 1s forwards",
            }}
          >
            {new Date().getFullYear()}
          </Highlight>
          .
        </Text>
      </Slide>
      <Slide notes="For over a decade, developers patched these holes with custom solutions before the spec formalized them.">
        <Text>
          When will the spec <Highlight>catch up</Highlight>?
        </Text>
      </Slide>
      <Slide style={{ background: primary }}>
        <Title
          style={{
            letterSpacing: "4rem",
          }}
        >
          OAuth 2.
          <span
            style={{
              display: "inline-flex",
              flexDirection: "column",
              overflow: "hidden",
              height: "50%",
            }}
          >
            <span
              style={
                {
                  letterSpacing: ".3rem",
                  animation: "1s ease-in shiftup 1s forwards ",
                } as React.CSSProperties
              }
            >
              0
            </span>
            <span
              style={
                {
                  letterSpacing: ".3rem",
                  animation: "1s ease-in shiftup 1s forwards ",
                } as React.CSSProperties
              }
            >
              1
            </span>
          </span>
        </Title>
      </Slide>
      <Slide notes="OAuth 2.1 is about consolidation - it's not a revolution.">
        <Text>
          OAuth 2.1 is about <Highlight>consolidation</Highlight>, not
          revolution.
        </Text>
      </Slide>
      <Slide notes="It takes proven security practices and makes them mandatory.">
        <Text>
          It takes <Highlight>proven practices</Highlight> and makes them{" "}
          <Highlight>mandatory</Highlight>.
        </Text>
      </Slide>
      <Slide notes="It removes the insecure flows we should never have had.">
        <Text>
          It <Highlight>removes insecure flows</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Makes security the default, not an afterthought.">
        <Text>
          It aims at being <Highlight>secure by default</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Columns>
          <div style={{ backgroundColor: primary }}>
            <Text>Core</Text>
          </div>
          <div>
            <Text>Extensions</Text>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Columns>
          <div style={{ backgroundColor: primary }}>
            <Text style={{ fontWeight: "bold" }}>Core</Text>
          </div>
          <div>
            <Text>Extensions</Text>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Columns>
          <div style={{ backgroundColor: primary }}>
            <Text style={{ fontWeight: "bold" }}>Core</Text>
          </div>
          <div>
            <List>
              <li>PKCE everywhere</li>
              <li>No implicit flow</li>
              <li>No password grant</li>
            </List>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Columns>
          <div style={{ backgroundColor: primary }}>
            <Text style={{ fontWeight: "bold" }}>Core</Text>
          </div>
          <div>
            <List>
              <li>Exact redirect matching</li>
              <li>Refresh token rotation</li>
              <li>HTTPS required</li>
            </List>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Text>Core</Text>
          </div>
          <div style={{ backgroundColor: primary }}>
            <Text style={{ fontWeight: "bold" }}>Extensions</Text>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Columns>
          <div>
            <List>
              <li>DPoP</li>
              <li>CIBA</li>
              <li>Metadata</li>
            </List>
          </div>
          <div style={{ backgroundColor: primary }}>
            <Text style={{ fontWeight: "bold" }}>Extensions</Text>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Columns>
          <div>
            <List>
              <li>Token Exchange</li>
              <li>Cross App Access</li>
            </List>
          </div>
          <div style={{ backgroundColor: primary }}>
            <Text style={{ fontWeight: "bold" }}>Extensions</Text>
          </div>
        </Columns>
      </Slide>
      <Slide style={{ background: primary }}>
        <Title
          style={{
            letterSpacing: "4rem",
          }}
        >
          OAuth 2.1 Core
        </Title>
        <Text style={{ fontStyle: "italic" }}>(Mandatory Changes)</Text>
      </Slide>
      <Slide notes="Entering the core OAuth 2.1 spec changes - everything here is mandatory.">
        <Subtitle>
          OAuth 2.1
          <br /> <Highlight>Mandatory Changes</Highlight>
        </Subtitle>
      </Slide>
      <Slide notes="First problem: public clients like mobile apps couldn't keep secrets safe.">
        <Title style={{ position: "relative" }}>
          <Highlight>Secrets</Highlight> can leak
          <span
            style={
              {
                position: "absolute",
                top: 0,
                left: 0,
                "--leakX": "80%",
                "--leakOp": 0.6,
                animation: "leak 1s",
                transform: "translate3d(0, var(--leakX), 0)",
                opacity: "var(--leakOp)",
              } as React.CSSProperties
            }
          >
            Secrets
          </span>
          <span
            style={
              {
                position: "absolute",
                top: 0,
                left: 0,
                "--leakX": "160%",
                "--leakOp": 0.3,
                animation: "leak 1s",
                transform: "translate3d(0, var(--leakX), 0)",
                opacity: "var(--leakOp)",
              } as React.CSSProperties
            }
          >
            Secrets
          </span>
          <span
            style={
              {
                position: "absolute",
                top: 0,
                left: 0,
                "--leakX": "240%",
                "--leakOp": 0.1,
                animation: "leak 1s",
                transform: "translate3d(0, var(--leakX), 0)",
                opacity: "var(--leakOp)",
              } as React.CSSProperties
            }
          >
            Secrets
          </span>
        </Title>
      </Slide>
      <Slide notes="The fundamental problem: public clients can't keep secrets.">
        <Text>
          Public clients <Highlight>can&apos;t keep secrets</Highlight>.
        </Text>
      </Slide>
      <Slide notes="PKCE (pronounced 'pixie') solves this with a cryptographic challenge.">
        <Subtitle>
          Proof Key for Code Exchange <Highlight>(PKCE)</Highlight>
        </Subtitle>
      </Slide>
      <Slide notes="Step 1: Generate a random verifier and hash it to create a challenge.">
        <Text>
          Generate a <Highlight>code verifier + challenge</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Step 1: Generate a random verifier and hash it to create a challenge.">
        <Text>
          The code verifier is{" "}
          <Highlight>high-entropy, cryptographically random string</Highlight>{" "}
          that must be between 43 and 128 characters.
        </Text>
      </Slide>
      <Slide notes="Step 1: Generate a random verifier and hash it to create a challenge.">
        <Text>
          The code challenge is{" "}
          <Highlight>the SHA-256 hash of the code verifier</Highlight> encoded
          using the BASE64URL encoding.
        </Text>
      </Slide>
      <Slide notes="Step 2: Send the challenge with the authorization request.">
        <Text>
          <Highlight>Send the challenge</Highlight> to authorization server{" "}
          <Highlight>when requesting a authorization code</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Include the challenge in the authorization request.">
        <Code
          lang="bash"
          code={`curl -G https://api.example.com/authorize \\
  -d "client_id=myapplication" \\
  -d "code_challenge=$CHALLENGE" \\
  -d "code_challenge_method=S256"`}
        />
      </Slide>
      <Slide notes="Step 3: Prove possession by sending the verifier at token exchange.">
        <Text>
          <Highlight>Prove</Highlight> you are the application that started the
          flow with the <Highlight>code verifier</Highlight> when exchanging the
          code for tokens.
        </Text>
      </Slide>
      <Slide notes="Exchange the code by sending the verifier.">
        <Code
          lang="bash"
          code={`curl -X POST https://api.example.com/token \\
  -d "grant_type=authorization_code" \\
  -d "code=$AUTH_CODE" \\
  -d "code_verifier=$VERIFIER"`}
        />
      </Slide>
      <Slide notes="The authz server rehashes and checks.">
        <Text>
          The Authorization Server <Highlight>hashes the verifier</Highlight>{" "}
          and <Highlight>compares it</Highlight> to the previously received
          challenge.
        </Text>
      </Slide>
      <Slide notes="PKCE is mandatory in OAuth 2.1 for all client types.">
        <Text>
          PKCE is <Highlight>mandatory</Highlight> in OAuth 2.1
          <br /> for all authorization code flows.
        </Text>
      </Slide>
      <Slide notes="OAuth 2.1 removes two insecure grant types.">
        <Title>
          <span style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translate3d(0, -50%, 0)",
                height: "2rem",
                background: primary,
                animation: "1s strike 0s forwards",
              }}
            />
            Implicit grant
          </span>
        </Title>
      </Slide>
      <Slide notes="The implicit flow is removed because tokens ended up in URL fragments.">
        <Text>
          Tokens end up in <Highlight>URL fragments</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Use authorization code with PKCE instead.">
        <Text>
          Use the <Highlight>authhorization code with PKCE</Highlight> flow
          instead.
        </Text>
      </Slide>
      <Slide notes="OAuth 2.1 removes two insecure grant types.">
        <Title>
          <span style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translate3d(0, -50%, 0)",
                height: "2rem",
                background: primary,
                animation: "1s strike 0s forwards",
              }}
            />
            Password grant
          </span>
        </Title>
      </Slide>
      <Slide notes="Password grant let apps collect user passwords directly - anti-pattern.">
        <Text>
          Apps collected <Highlight>passwords</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Use authorization code flow for first-party apps.">
        <Text>
          Use the <Highlight>authhorization code with PKCE</Highlight> flow
          instead.
        </Text>
      </Slide>
      <Slide notes="OAuth 2.1 requires exact redirect URI matching - no wildcards.">
        <Title>Redirect URIs</Title>
      </Slide>
      <Slide notes="OAuth 2.1 requires exact redirect URI matching - no wildcards.">
        <Text>
          <Highlight>Exact</Highlight> matching required,{" "}
          <Highlight>no wildcards</Highlight>, no partial matches allowed.
        </Text>
      </Slide>
      <Slide notes="Every refresh token use issues a new one and invalidates the old.">
        <Title>Refresh Token Rotation</Title>
      </Slide>
      <Slide>
        <Text>
          <Highlight>Rotate Refresh Tokens</Highlight> after every use.
        </Text>
      </Slide>
      <Slide notes="HTTPS is mandatory everywhere except localhost for development.">
        <Title>
          <Highlight>HTTPS</Highlight> mandatory
        </Title>
      </Slide>
      <Slide>
        <Text>
          <Highlight>HTTPS is mandatory</Highlight> for all communication,
          including <Highlight>redirection URIs and token transport</Highlight>,
          to enhance security by preventing credential leakage.
        </Text>
      </Slide>
      <Slide notes="Now we shift to optional extensions that enhance OAuth.">
        <Title style={{ position: "relative" }}>
          Whoever{" "}
          <span style={{ position: "relative" }}>
            <Highlight>holds</Highlight>
            <Highlight
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                animation: "bearer 1s",
                opacity: 0,
              }}
            >
              owns
            </Highlight>
          </span>{" "}
          it, <Highlight>owns</Highlight>
          it!
        </Title>
      </Slide>
      <Slide>
        <Text>
          Access tokens are <Highlight>presented as Bearer Tokens</Highlight>.
        </Text>
      </Slide>

      <Slide notes="DPoP binds tokens to cryptographic keys.">
        <Title>Demonstrating Proof-of-Possession</Title>
        <a
          href="https://datatracker.ietf.org/doc/html/rfc9449"
          title="rfc 9449"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          rfc 9449
        </a>
      </Slide>
      <Slide notes="DPoP binds tokens to cryptographic keys.">
        <Title>DPoP</Title>
        <a
          href="https://datatracker.ietf.org/doc/html/rfc9449"
          title="rfc 9449"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          rfc 9449
        </a>
      </Slide>
      <Slide notes="DPoP binds access tokens to client keys.">
        <Text>
          <Highlight>Binds tokens</Highlight> to cryptographic keys.
        </Text>
      </Slide>
      <Slide notes="Client must sign every request to prove possession.">
        <Text>
          A client (app) must <Highlight>sign</Highlight> every request, to{" "}
          <Highlight>prove possession</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Stolen tokens are useless without the private key.">
        <Text>
          <Highlight>Stolen tokens are useless</Highlight> <br />
          withouth the corresponding private key.
        </Text>
      </Slide>
      <Slide>
        <Text>
          A <Highlight>proof</Highlight> is presented as a{" "}
          <Highlight>JSON Web Token</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Step 2: Create a proof JWT for each request.">
        <Code
          lang="javascript"
          code={`const dpopProof = createJWT({
  header: {
    typ: 'dpop+jwt',
    alg: 'ES256',
    jwk: publicKey // Pass your public key
  },
  payload: {
    htm: 'POST',
    // This proof is only valid for this url
    htu: 'https://api.example.com/profile'
  }
}, privateKey); // Sign with your private key`}
        />
      </Slide>
      <Slide notes="Step 3: Send token with proof in every request.">
        <Text>
          Send the token with proof with <Highlight>every request</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Code
          lang="bash"
          code={`curl https://api.example.com/profile \\
  -H "Authorization: ..." \\
  -H "DPoP: $DPOP_PROOF"`}
        />
      </Slide>
      <Slide>
        <Text>
          <Highlight>The DPoP proof&apos;s public key</Highlight> is represented
          using the <Highlight>confirmation method (cnf)</Highlight> in the
          Access Token&apos;s header.
        </Text>
      </Slide>
      <Slide>
        <Text>
          A JSON Web Key Thumbprint (jkt) holds{" "}
          <Highlight>a hash of the proof&apos;s public key</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          With the{" "}
          <Highlight>DPoP proof&apos;s public key thumbprint</Highlight> in the
          Access Token, we can validate{" "}
          <Highlight>
            subsequent DPoP proofs are issued by the same application that
            requested the Access Token
          </Highlight>
          .
        </Text>
      </Slide>
      <Slide notes="Step 2: Create a proof JWT for each request.">
        <Code
          lang="json"
          code={`{
  "iss": "https://a.auth0.com",
  "sub": "1234",
  "aud": "https://api.example.com",
  "exp": 1776883637,
  "iat": 1776880037,
  "cnf": {
    "jkt": "YTpgaRpPiUmjWDVjgRRrGshj6ZfAawP6FvHgbsPIRLU"
  }
}`}
        />
      </Slide>
      <Slide notes="Step 3: Send token with proof in every request.">
        <Text
          style={{
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          Authorization:{" "}
          <span
            style={{
              display: "inline-flex",
              flexDirection: "column",
              overflow: "hidden",
              height: "50%",
              fontFamily: "var(--font-geist-mono)",
              margin: 0,
              gap: 0,
              textAlign: "left",
            }}
          >
            <span
              style={
                {
                  letterSpacing: ".3rem",
                  animation: "1s ease-in shiftup 1s forwards ",
                } as React.CSSProperties
              }
            >
              Bearer eyJhbGca...
            </span>
            <span
              style={
                {
                  letterSpacing: ".3rem",
                  animation: "1s ease-in shiftup 1s forwards ",
                } as React.CSSProperties
              }
            >
              DPoP eyJhbGca...
            </span>
          </span>
        </Text>
      </Slide>
      <Slide notes="Step 3: Send token with proof in every request.">
        <Text>
          Instead of the Bearer scheme <Highlight>we use DPoP</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Code
          lang="bash"
          code={`curl https://api.example.com/profile \\
  -H "Authorization: DPoP $ACCES_TOKEN" \\
  -H "DPoP: $DPOP_PROOF"`}
        />
      </Slide>
      <Slide>
        <Text>
          <Highlight>
            Subsequent DPoP proof&apos; must include an Access Token Hash (ath)
          </Highlight>{" "}
          claim with a valid hash of the associated Access Token.
        </Text>
      </Slide>
      <Slide notes="Step 2: Create a proof JWT for each request.">
        <Code
          lang="json"
          code={`{
  "htm": "GET",
  "htu": "https://api.example.com/profile"
  "ath": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
}`}
        />
      </Slide>
      <Slide notes="DPoP is optional - use for high-security APIs.">
        <Text>
          <Highlight>DPoP is optional</Highlight>, often used for high-security
          APIs.
        </Text>
      </Slide>
      <Slide notes="Traditional OAuth requires real-time browser presence">
        <Browser>
          <div
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Title style={{ position: "relative", marginTop: "-10%" }}>
              User must be present <Highlight>at their browser</Highlight>
            </Title>
          </div>
        </Browser>
      </Slide>
      <Slide notes="CIBA enables async, decoupled authentication.">
        <Title>Client-Initiated Backchannel Authentication</Title>
        <a
          href="https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html"
          title="OIDC spec"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          OIDC spec
        </a>
      </Slide>
      <Slide notes="CIBA enables async, decoupled authentication.">
        <Title>CIBA</Title>
        <a
          href="https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html"
          title="OIDC spec"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          OIDC spec
        </a>
      </Slide>
      <Slide>
        <Text>
          CIBA enables <Highlight>async, decoupled authentication</Highlight>
        </Text>
      </Slide>
      <Slide notes="Step 1: Client initiates auth via backchannel.">
        <Text>
          A client (app) initiates an authentication requests{" "}
          <Highlight>via a backchannel</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Initiate backchannel authentication.">
        <Code
          lang="bash"
          code={`curl -X POST https://api.example.com/bc-authorize \\
  -d "login_hint=user@example.com" \\
  -d "binding_message=Approve #12345"`}
        />
      </Slide>
      <Slide notes="Step 2: User gets notified and approves on their device.">
        <Text>
          The user can <Highlight>confirm</Highlight> the request trough a{" "}
          <Highlight>mobile push message, mail, sms, ...</Highlight>
        </Text>
      </Slide>
      <Slide notes="Step 2: User gets notified and approves on their device.">
        <Text>
          There are multiple <Highlight>backchannel delivery modes</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Step 2: User gets notified and approves on their device.">
        <Text>
          A client can <Highlight>poll</Highlight> for new backchannel
          authorization requests.
        </Text>
      </Slide>
      <Slide notes="Poll for token after user approves.">
        <Code
          lang="bash"
          code={`curl -X POST https://api.example.com/token \\
  -d "grant_type=urn:openid:params:grant-type:ciba" \\
  -d "auth_req_id=$AUTH_REQ_ID"`}
        />
      </Slide>
      <Slide notes="Step 2: User gets notified and approves on their device.">
        <Text>
          A client can{" "}
          <Highlight>register a client notification endpoint url</Highlight>{" "}
          that will be <Highlight>pinged</Highlight> when a new backchannel
          authorization requests is made.
        </Text>
      </Slide>
      <Slide notes="Step 2: User gets notified and approves on their device.">
        <Text>
          An authorization server can <Highlight>push</Highlight> tokens
          directly to the client.
        </Text>
      </Slide>

      <Slide notes="CIBA is perfect for IoT and call center scenarios.">
        <Text>
          CIBA can grant access to <Highlight>IoT devices</Highlight>.
        </Text>
      </Slide>

      <Slide notes="CIBA is perfect for IoT and call center scenarios.">
        <Text>
          CIBA can grant access{" "}
          <Highlight>support staff at Call centers</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Also great for async approvals and high-value transactions.">
        <Text>
          CIBA can request <Highlight>async approvals</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Also great for async approvals and high-value transactions.">
        <Text>
          CIBA can request extra approval for{" "}
          <Highlight>high-value transactions</Highlight>.
        </Text>
      </Slide>

      <Slide notes="Fourth problem: configuration was manual copy-paste from docs.">
        <Title style={{ position: "relative" }}>
          <Highlight
            style={{
              animation: "click 1s",
              display: "inline-block",
              position: "relative",
            }}
          >
            Manual
            <img
              src="cursor.svg"
              alt="A hand cursor"
              style={{
                position: "absolute",
                right: "-5rem",
                bottom: "-5rem",
                width: "10rem",
                height: "10rem",
              }}
            />
          </Highlight>{" "}
          configuration
        </Title>
      </Slide>
      <Slide>
        <Text>
          Every endpoint needs to be <Highlight>manually configured</Highlight>.
        </Text>
      </Slide>
      <Slide notes="RFC 8414 enables discovery via well-known endpoints.">
        <Title>Authorization Server Metadata</Title>
        <div>
          <a
            href="https://datatracker.ietf.org/doc/html/rfc8414"
            title="rfc 8414"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: foreground, fontSize: "3rem", display: "inline" }}
          >
            rfc 8414
          </a>{" "}
          -{" "}
          <a
            href="https://openid.net/specs/openid-connect-discovery-1_0.html"
            title="OIDC spec"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: foreground, fontSize: "3rem", display: "inline" }}
          >
            OIDC spec
          </a>
        </div>
      </Slide>
      <Slide>
        <Text>
          <Highlight>Publish authorization metadata</Highlight> on a .well-known
          enpoint.
        </Text>
      </Slide>
      <Slide notes="Fetch metadata from well-known endpoint.">
        <Title>Fetch Metadata</Title>
        <Code
          lang="bash"
          code={`curl https://x.auth0.com/.well-known/oauth-authorization-server
curl https://x.auth0.com/.well-known/openid-configuration 

# Returns endpoints, capabilities,
# supported algorithms, etc.`}
        />
      </Slide>
      <Slide>
        <Code
          lang="json"
          code={`{
  "issuer": "https://x.auth0.com/",
  "authorization_endpoint": "https://x.auth0.com/authorize",
  "token_endpoint": "https://x.auth0.com/oauth/token",
  "userinfo_endpoint": "https://x.auth0.com/userinfo",
  "mfa_challenge_endpoint": "https://x.auth0.com/mfa/challenge",
  "jwks_uri": "https://x.auth0.com/.well-known/jwks.json",
  "revocation_endpoint": "https://x.auth0.com/oauth/revoke",
  "scopes_supported": [ ... ],
  "code_challenge_methods_supported": [ ... ]
}`}
        />
      </Slide>
      <Slide notes="Metadata enables dynamic configuration and reduces errors.">
        <Text>
          Metadata enables <Highlight>dynamic configuration</Highlight> and
          reduces errors.
        </Text>
      </Slide>
      <Slide notes="Metadata enables dynamic configuration and reduces errors.">
        <Text>
          What if clients could{" "}
          <Highlight>register themselves on your identity provider</Highlight>,
          eliminating manual work?
        </Text>
      </Slide>

      <Slide>
        <Title>Dynamic Client Registration</Title>
        <Text>
          <a
            href="https://datatracker.ietf.org/doc/html/rfc7591"
            title="rfc 8414"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: foreground, fontSize: "3rem", display: "inline" }}
          >
            rfc 7591
          </a>
        </Text>
      </Slide>
      <Slide>
        <Text>
          A client can <Highlight>register themselves</Highlight> on an identity
          provide.
        </Text>
      </Slide>

      <Slide notes="Register a client dynamically via a POST to the registration endpoint.">
        <Code
          lang="bash"
          code={`curl -X POST https://a.auth0.com/oidc/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_name": "My App",
    "redirect_uris": ["https://app.example.com/callback"],
    "grant_types": ["authorization_code"],
    "token_endpoint_auth_method": "client_secret_basic"
  }'`}
        />
      </Slide>

      <Slide notes="The auth server responds with a client_id and client_secret.">
        <Code
          lang="json"
          code={`{
  "client_id": "s6BhdRkqt3",
  "client_secret": "cf136dc3c1fc93f31185e5885805d",
  "redirect_uris": ["https://app.example.com/callback"],
  "grant_types": ["authorization_code"]
}`}
        />
      </Slide>
      <Slide>
        <Text>
          DCR means <Highlight>anybody can register clients</Highlight> on your
          identity provider!
        </Text>
      </Slide>

      <Slide notes="If servers can publish metadata, why not clients too?">
        <Text>
          If servers can publish metadata,{" "}
          <Highlight>why not clients</Highlight> too?
        </Text>
      </Slide>

      <Slide notes="If servers can publish metadata, why not clients too?">
        <Title>Client ID Metadata Documents</Title>
        <a
          href="https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/"
          title="draft spec"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          draft spec
        </a>
      </Slide>
      <Slide notes="If servers can publish metadata, why not clients too?">
        <Title>CIMD</Title>
        <a
          href="https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/"
          title="draft spec"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          draft spec
        </a>
      </Slide>

      <Slide notes="Client ID Metadata Documents let the client_id be a URL pointing to a self-describing document.">
        <Text>
          Client ID Metadata Documents let{" "}
          <Highlight>
            the client_id be a URL pointing to a self-describing document
          </Highlight>
          .
        </Text>
      </Slide>
      <Slide>
        <Text>
          For example:{" "}
          <Highlight style={{ fontFamily: "var(--font-geist-mono)" }}>
            https://app.example.com/oauth.json
          </Highlight>
        </Text>
      </Slide>
      <Slide notes="Example of a Client ID Metadata Document.">
        <Code
          lang="json"
          code={`{
  "client_id": "https://app.example.com/oauth.json",
  "client_name": "My Application",
  "redirect_uris": [
    "https://app.example.com/callback"
  ],
  "logo_uri": "https://app.example.com/logo.png"
}`}
        />
      </Slide>
      <Slide notes="The auth server fetches the client_id URL to discover metadata — no pre-registration needed.">
        <Text>
          The authhorization server <Highlight>fetches the URL</Highlight> to
          discover the client.
        </Text>
      </Slide>
      <Slide notes="The auth server fetches the client_id URL to discover metadata — no pre-registration needed.">
        <Text>
          No <Highlight>pre-registration</Highlight> of clients required!
        </Text>
      </Slide>
      <Slide>
        <Text>
          This is especially usefull in an agentic context, eg.{" "}
          <Highlight>mcp clients</Highlight>.
        </Text>
      </Slide>

      <Slide notes="Fourth problem: services passed credentials around unsafely.">
        <Title>
          Credential{" "}
          <Highlight style={{ position: "relative" }}>
            copying
            <Highlight
              style={
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  opacity: 0,
                  transformOrigin: "0px 0px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, .2)",
                  "--copyX": "10%",
                  "--copyY": "-40%",
                  animation: ".3s ease-in copy 0s forwards",
                } as React.CSSProperties
              }
            >
              copying
            </Highlight>
            <Highlight
              style={
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2,
                  opacity: 0,
                  transformOrigin: "0px 0px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, .2)",
                  "--copyX": "20%",
                  "--copyY": "-70%",
                  animation: ".3s ease-in copy .3s forwards",
                } as React.CSSProperties
              }
            >
              copying
            </Highlight>
            <Highlight
              style={
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 3,
                  opacity: 0,
                  transformOrigin: "0px 0px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, .2)",
                  "--copyX": "30%",
                  "--copyY": "-100%",
                  animation: ".3s ease-in copy .6s forwards",
                } as React.CSSProperties
              }
            >
              copying
            </Highlight>
          </Highlight>
          <Text
            style={
              {
                position: "absolute",
                top: "-30%",
                left: "0",
                fontSize: "1.5vw",
                fontWeight: "bold",
              } as React.CSSProperties
            }
          >
            <Highlight>Problem</Highlight>
          </Text>
        </Title>
      </Slide>
      <Slide notes="Service B gets the full token — more access than it needs.">
        <Text>
          Tokens are often copied and{" "}
          <Highlight>forwarded to downstream services</Highlight>.
        </Text>
      </Slide>

      <Slide notes="Token Exchange enables scoped delegation.">
        <Title>Token Exchange</Title>
        <a
          href="https://datatracker.ietf.org/doc/html/rfc8693"
          title="rfc 8693"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          rfc 8693
        </a>
      </Slide>
      <Slide>
        <Text>
          Token Exchange enables <Highlight>scoped delegation</Highlight>.
        </Text>
      </Slide>
      <Slide>
        <Text>
          It let&apos;s a service <Highlight>exchange a token</Highlight> for a
          <Highlight>new, scoped one</Highlight> for a downstream service.
        </Text>
      </Slide>
      <Slide notes="Exchange user token for service-specific token.">
        <Code
          lang="bash"
          code={`curl -X POST https://x.auth0.com/token \\
  -d "grant_type=urn:ietf:params:oauth:grant-type:token-exchange" \\
  -d "subject_token=$USER_TOKEN" \\
  -d "subject_token_type=urn:ietf:params:oauth:token-type:access_token" \\
  -d "audience=https://b.service.example.com" \\
  -d "scope=read:data"`}
        />
      </Slide>
      <Slide notes="Each service gets minimal scope - least privilege.">
        <Text>
          Each service gets <Highlight>minimal scope</Highlight>, following the
          least privilege appoach.
        </Text>
      </Slide>
      <Slide notes="Tokens only work for intended service - audience restriction.">
        <Text>
          Tokens only work for <Highlight>intended service</Highlight>, their
          Audience.
        </Text>
      </Slide>
      <Slide notes="Compromised service has limited blast radius.">
        <Text>
          A compromised service has <Highlight>limited blast radius</Highlight>.
        </Text>
      </Slide>

      <Slide>
        <Text>
          This works for{" "}
          <Highlight>Access Tokens, ID tokens and Refresh Tokens</Highlight>, as
          well as SAML assertions.
        </Text>
      </Slide>

      <Slide notes="Problem: App A and App B live in different authorization domains — the user has no token for App B.">
        <Title>
          <Highlight
            style={{
              animation: "1s ease-in silo 0s forwards",
              boxSizing: "border-box",
            }}
          >
            Siloed
          </Highlight>{" "}
          authorization domains
        </Title>
      </Slide>

      <Slide>
        <Text>
          Authorization servers <Highlight>don&apos;t share sessions</Highlight>{" "}
          between them.
        </Text>
      </Slide>
      <Slide>
        <Title>Cross-App Access</Title>
        <a
          href="https://datatracker.ietf.org/doc/html/rfc7523"
          title="rfc 7523"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          rfc 7523
        </a>
      </Slide>
      <Slide>
        <Title>XAA</Title>
        <a
          href="https://datatracker.ietf.org/doc/html/rfc7523"
          title="rfc 7523"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: foreground, fontSize: "3rem" }}
        >
          rfc 7523
        </a>
      </Slide>

      <Slide notes="Cross-App Access — formerly the Identity Assertion JWT Authorization Grant.">
        <Text>
          Formerly known as the
          <br />
          <Highlight>Identity Assertion JWT Authorization Grant</Highlight>.
        </Text>
      </Slide>

      <Slide notes="The problem: App A has a logged-in user but needs to call App B on their behalf without forwarding tokens.">
        <Text>
          The problem: service A needs to call service B on behalf of a user
          <Highlight>without forwarding a token</Highlight>.
        </Text>
      </Slide>

      <Slide notes="App A creates a signed JWT asserting the user's identity and presents it to App B's authorization server.">
        <Text>
          App A <Highlight>asserts the user&apos;s identity</Highlight> to App
          B&apos;s authorization server using a signed JWT.
        </Text>
      </Slide>

      <Slide>
        <Text>
          This identity assertion is called an <Highlight>ID-JAG</Highlight>.
        </Text>
      </Slide>

      <Slide notes="Step 1: App A requests an ID-JAG from Auth Server A via Token Exchange, with Auth Server B as the audience.">
        <Title>Step 1: Get the ID-JAG</Title>
        <Code
          lang="bash"
          code={`curl -X POST https://a.auth0.com/oauth/token \\
  -d "grant_type=urn:ietf:params:oauth:grant-type:token-exchange" \\
  -d "subject_token=$USER_TOKEN" \\
  -d "subject_token_type=urn:ietf:params:oauth:token-type:access_token" \\
  -d "requested_token_type=urn:ietf:params:oauth:token-type:id-jag" \\
  -d "audience=https://b.auth0.com"`}
        />
      </Slide>

      <Slide notes="What the identity assertion JWT contains.">
        <Code
          lang="json"
          code={`{
  "alg": "RS256",
  "typ": "oauth-id-jag+jwt"
}`}
        />
        <br />
        <Code
          lang="json"
          code={`{
  "iss": "https://a.auth0.com",
  "sub": "user@example.com",
  "aud": "https://b.auth0.com",
  "exp": 1234567890
}`}
        />
      </Slide>

      <Slide notes="App A must be trusted by App B's authorization server.">
        <Text>
          App B&apos;s authorization server{" "}
          <Highlight>must trust App A</Highlight> to assert identities.
        </Text>
      </Slide>

      <Slide>
        <Text>
          App A <Highlight>presents the ID-JAG</Highlight> to App B to{" "}
          <Highlight>get an Access Token</Highlight>.
        </Text>
      </Slide>

      <Slide notes="Step 2: App A presents the ID-JAG at Auth Server B to get an access token for App B.">
        <Code
          lang="bash"
          code={`curl -X POST https://b.auth0.com/oauth/token \\
  -d "grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer" \\
  -d "assertion=$ID_JAG"`}
        />
      </Slide>

      <Slide notes="Key difference from Token Exchange — no existing token needed, App A vouches for the user.">
        <Text>
          Unlike Token Exchange,{" "}
          <Highlight>no existing (access) token is needed</Highlight>.
        </Text>
      </Slide>
      <Slide notes="Key difference from Token Exchange — no existing token needed, App A vouches for the user.">
        <Text>
          <Highlight>App A vouches</Highlight> for the user directly.
        </Text>
      </Slide>

      <Slide style={{ background: primary }}>
        <Title
          style={{
            letterSpacing: "4rem",
          }}
        >
          Practical Guidance
        </Title>
      </Slide>
      <Slide notes="Understand what's mandatory versus optional.">
        <Text>
          <Highlight>OAuth 2.1 Core</Highlight> is mandatory.
        </Text>
      </Slide>
      <Slide notes="Understand what's mandatory versus optional.">
        <Text>
          <Highlight>OAuth Extensions</Highlight> are optional.
        </Text>
      </Slide>
      <Slide notes="PKCE is mandatory - always use it.">
        <Text>
          <Highlight>PKCE</Highlight> is mandatory.
        </Text>
      </Slide>
      <Slide notes="DPoP for high-security scenarios.">
        <Text>
          <Highlight>DPoP</Highlight> for high-security APIs.
        </Text>
      </Slide>
      <Slide notes="CIBA for IoT and async auth.">
        <Text>
          <Highlight>CIBA</Highlight> for IoT, async auth, ...
        </Text>
      </Slide>
      <Slide notes="Token Exchange for microservices.">
        <Text>
          <Highlight>Token Exchange</Highlight> lets services exchange tokens
          for new, scoped ones.
        </Text>
      </Slide>
      <Slide notes="OAuth 2.1's philosophy: make security the default.">
        <Text>
          OAuth 2.1&apos;s philosophy:{" "}
          <Highlight>make security the default</Highlight>.
        </Text>
      </Slide>

      <Slide notes="Key RFCs for OAuth 2.1 core.">
        <Title>OAuth 2.1</Title>
        <Text>
          <a
            href="https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1
          </a>
        </Text>
      </Slide>
      <Slide>
        <Title>PKCE</Title>
        <Text>
          <a
            href="https://datatracker.ietf.org/doc/html/rfc7636"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://datatracker.ietf.org/doc/html/rfc7636
          </a>
        </Text>
      </Slide>
      <Slide>
        <Title>Authorization Server Metadata</Title>
        <Text>
          <a
            href="https://datatracker.ietf.org/doc/html/rfc8414"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://datatracker.ietf.org/doc/html/rfc8414
          </a>
        </Text>
      </Slide>
      <Slide>
        <Title>Client ID Metadata Documents</Title>
        <Text>
          <a
            href="https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/
          </a>
        </Text>
      </Slide>
      <Slide>
        <Title>DPoP</Title>
        <Text>
          <a
            href="https://datatracker.ietf.org/doc/html/rfc9449"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://datatracker.ietf.org/doc/html/rfc9449
          </a>
        </Text>
      </Slide>
      <Slide>
        <Title>CIBA</Title>
        <Text>
          <a
            href="https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html
          </a>
        </Text>
      </Slide>
      <Slide>
        <Title>Token Exchange</Title>
        <Text>
          <a
            href="https://datatracker.ietf.org/doc/html/rfc8693"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://datatracker.ietf.org/doc/html/rfc8693
          </a>
        </Text>
      </Slide>
      <Slide>
        <Title>XAA</Title>
        <Text>
          <a
            href="https://datatracker.ietf.org/doc/html/rfc7523"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://datatracker.ietf.org/doc/html/rfc7523
          </a>
        </Text>
      </Slide>
      <Slide>
        <Title>
          <a
            href="https://dpop.info"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            DPOP.info
          </a>
        </Title>
      </Slide>
      <Slide>
        <Title>
          <a
            href="https://xaa.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            xaa.dev
          </a>
        </Title>
      </Slide>
      <Slide>
        <Title>
          <a
            href="https://bearer.sambego.tech"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            bearer.sambego.tech
          </a>
        </Title>
      </Slide>

      <Slide notes="Security, Privacy, Payments, and Identity">
        <Columns>
          <div>
            <Image src="sam.jpg" alt="A picture of me" full color={primary} />
          </div>
          <div>
            <Subtitle>Sam Bellen</Subtitle>
            <List>
              <li>Principal Developer Advocate</li>
              <li>Auth0</li>
              <li>@sambego</li>
            </List>
          </div>
        </Columns>
      </Slide>
      <Slide
        style={{ background: primary }}
        notes="Thank the audience and open for questions."
      >
        <Title>Thank You</Title>
      </Slide>
    </Deck>
  );
}
