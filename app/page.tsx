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
} from "@sambego/diorama";

export default function Home() {
  const primary = "#a3be8c";
  const foreground = "#fff";
  return (
    <Deck
      footer={
        <Footer
          left={<Highlight color={primary}>@sambego</Highlight>}
          right={<Highlight color={primary}>bear.sambego.tech</Highlight>}
        />
      }
    >
      <Slide style={{ background: primary, color: foreground }}>
        <Image
          src="bear.jpg"
          full
          color={primary}
          style={{
            overflow: "hidden",
            zIndex: 1,
          }}
          alt="A bear in the woods"
        />
        <Title style={{ color: foreground, position: "relative", zIndex: 1 }}>
          Bearer of Good News!
        </Title>
        <Image
          src="cc.svg"
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            width: "10%",
            zIndex: 2,
          }}
          alt="Creative commons"
        />
      </Slide>

      {/* Slide 2: OAuth 2.0 Problems Header */}
      <Slide
        notes="OAuth 2.0 launched in 2012 with good intentions but had significant security gaps."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>The Foundation Had Cracks</Title>
      </Slide>

      {/* Slide 3-7: Individual Problems */}
      <Slide notes="First problem: public clients like mobile apps couldn't keep secrets safe.">
        <Title>OAuth 2.0 Problems</Title>
        <Text style={{ fontSize: "2em" }}>
          Public clients <Highlight color="#a3be8c">leaked secrets</Highlight>
        </Text>
      </Slide>

      <Slide notes="Second problem: bearer tokens worked like cash - steal and spend.">
        <Title>OAuth 2.0 Problems</Title>
        <Text style={{ fontSize: "2em" }}>
          Bearer tokens <Highlight color="#a3be8c">like cash</Highlight>
        </Text>
      </Slide>

      <Slide notes="Third problem: users had to stay at their browser during the entire flow.">
        <Title>OAuth 2.0 Problems</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Browser-bound</Highlight> flows
        </Text>
      </Slide>

      <Slide notes="Fourth problem: configuration was manual copy-paste from docs.">
        <Title>OAuth 2.0 Problems</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Manual</Highlight> configuration
        </Text>
      </Slide>

      <Slide notes="Fifth problem: services passed credentials around unsafely.">
        <Title>OAuth 2.0 Problems</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Credential copying</Highlight> everywhere
        </Text>
      </Slide>

      {/* Slide 8: Developer Experience */}
      <Slide notes="For over a decade, developers patched these holes with custom solutions before the spec formalized them.">
        <Quote quotee="Every OAuth Developer, 2012-2024">
          When will the spec catch up?
        </Quote>
      </Slide>

      {/* Slide 9-12: OAuth 2.1 Definition */}
      <Slide notes="OAuth 2.1 is about consolidation - it's not a revolution.">
        <Title>OAuth 2.1</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Consolidation</Highlight>, not revolution
        </Text>
      </Slide>

      <Slide notes="It takes proven security practices and makes them mandatory.">
        <Title>OAuth 2.1</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Proven practices</Highlight> → mandatory
        </Text>
      </Slide>

      <Slide notes="It removes the insecure flows we should never have had.">
        <Title>OAuth 2.1</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Removes</Highlight> insecure flows
        </Text>
      </Slide>

      <Slide notes="Makes security the default, not an afterthought.">
        <Title>OAuth 2.1</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Secure by default</Highlight>
        </Text>
      </Slide>

      {/* Slide 13: Core vs Extensions Header */}
      <Slide notes="The presentation is divided into two parts: mandatory core changes and optional extensions.">
        <Title>Two Parts</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Core</Highlight> vs{" "}
          <Highlight color="#a3be8c">Extensions</Highlight>
        </Text>
      </Slide>

      {/* Slide 14-15: What's Core */}
      <Slide notes="Core changes are mandatory in OAuth 2.1.">
        <Title>Core (Mandatory)</Title>
        <List>
          <li>PKCE everywhere</li>
          <li>No implicit flow</li>
          <li>No password grant</li>
        </List>
      </Slide>

      <Slide notes="More core mandatory changes.">
        <Title>Core (Mandatory)</Title>
        <List>
          <li>Exact redirect matching</li>
          <li>Refresh token rotation</li>
          <li>HTTPS required</li>
        </List>
      </Slide>

      {/* Slide 16-17: What's Optional */}
      <Slide notes="Extensions are optional - choose based on your needs.">
        <Title>Extensions (Optional)</Title>
        <List>
          <li>DPoP</li>
          <li>CIBA</li>
          <li>Metadata</li>
        </List>
      </Slide>

      <Slide notes="More optional extensions.">
        <Title>Extensions (Optional)</Title>
        <List>
          <li>Token Exchange</li>
          <li>JWT Bearer</li>
        </List>
      </Slide>

      {/* ===== SECTION 2: OAUTH 2.1 CORE ===== */}

      {/* Slide 18: Core Section Header */}
      <Slide
        notes="Entering the core OAuth 2.1 spec changes - everything here is mandatory."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>OAuth 2.1 Core</Title>
        <Subtitle style={{ color: "#ffffff" }}>Mandatory Changes</Subtitle>
      </Slide>

      {/* ===== PKCE SUBSECTION ===== */}

      {/* Slide 19: PKCE Problem */}
      <Slide
        notes="The fundamental problem: public clients can't keep secrets."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>Problem</Title>
        <Text style={{ color: "#ffffff", fontSize: "2em" }}>
          Public clients can&apos;t keep{" "}
          <Highlight color="#2b303b">secrets</Highlight>
        </Text>
      </Slide>

      {/* Slide 20: PKCE Solution Intro */}
      <Slide notes="PKCE (pronounced 'pixie') solves this with a cryptographic challenge.">
        <Title>PKCE</Title>
        <Subtitle>Proof Key for Code Exchange</Subtitle>
      </Slide>

      {/* Slide 21-24: PKCE Steps */}
      <Slide notes="Step 1: Generate a random verifier and hash it to create a challenge.">
        <Title>PKCE</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">1. Generate</Highlight> verifier +
          challenge
        </Text>
      </Slide>

      <Slide notes="Step 2: Send the challenge with the authorization request.">
        <Title>PKCE</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">2. Send</Highlight> challenge to auth
          server
        </Text>
      </Slide>

      <Slide notes="Step 3: Prove possession by sending the verifier at token exchange.">
        <Title>PKCE</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">3. Prove</Highlight> with verifier
        </Text>
      </Slide>

      <Slide notes="Step 4: Server verifies the verifier hashes to the challenge.">
        <Title>PKCE</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">4. Verify</Highlight> server checks hash
        </Text>
      </Slide>

      {/* Slide 25: PKCE Code - Generate */}
      <Slide notes="Generate a cryptographically random verifier and hash it.">
        <Title>Generate Challenge</Title>
        <Code
          lang="javascript"
          code={`const verifier = generateRandomString(128);

const challenge = base64url(sha256(verifier));`}
        />
      </Slide>

      {/* Slide 26: PKCE Code - Send */}
      <Slide notes="Include the challenge in the authorization request.">
        <Title>Send Challenge</Title>
        <Code
          lang="javascript"
          code={`const authUrl = \`/authorize?
  client_id=myapp
  &code_challenge=\${challenge}
  &code_challenge_method=S256\`;`}
        />
      </Slide>

      {/* Slide 27: PKCE Code - Verify */}
      <Slide notes="Exchange the code by sending the verifier.">
        <Title>Exchange with Verifier</Title>
        <Code
          lang="javascript"
          code={`fetch('/token', {
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code: authCode,
    code_verifier: verifier
  })
});`}
        />
      </Slide>

      {/* Slide 28: PKCE Status */}
      <Slide notes="PKCE is mandatory in OAuth 2.1 for all client types.">
        <Title>PKCE Status</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Mandatory</Highlight> in OAuth 2.1
        </Text>
      </Slide>

      {/* ===== REMOVED FLOWS ===== */}

      {/* Slide 29: Removed Flows Header */}
      <Slide
        notes="OAuth 2.1 removes two insecure grant types."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>Removed</Title>
        <Text style={{ color: "#ffffff", fontSize: "2em" }}>
          Implicit + Password grants
        </Text>
      </Slide>

      {/* Slide 30-31: Implicit Flow */}
      <Slide notes="The implicit flow is removed because tokens ended up in URL fragments.">
        <Title>Implicit Flow</Title>
        <Text style={{ fontSize: "2em" }}>
          Tokens in <Highlight color="#a3be8c">URL fragments</Highlight>
        </Text>
      </Slide>

      <Slide notes="Use authorization code with PKCE instead.">
        <Title>Implicit Flow</Title>
        <Text style={{ fontSize: "1.8em" }}>
          Use <Highlight color="#a3be8c">auth code + PKCE</Highlight> instead
        </Text>
      </Slide>

      {/* Slide 32-33: Password Grant */}
      <Slide notes="Password grant let apps collect user passwords directly - anti-pattern.">
        <Title>Password Grant</Title>
        <Text style={{ fontSize: "2em" }}>
          Apps collected <Highlight color="#a3be8c">passwords</Highlight>
        </Text>
      </Slide>

      <Slide notes="Use authorization code flow for first-party apps.">
        <Title>Password Grant</Title>
        <Text style={{ fontSize: "1.8em" }}>
          Use <Highlight color="#a3be8c">auth code flow</Highlight> instead
        </Text>
      </Slide>

      {/* ===== OTHER CORE CHANGES ===== */}

      {/* Slide 34: Redirect URI Matching */}
      <Slide notes="OAuth 2.1 requires exact redirect URI matching - no wildcards.">
        <Title>Redirect URIs</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Exact</Highlight> matching required
        </Text>
      </Slide>

      {/* Slide 35: Refresh Token Rotation */}
      <Slide notes="Every refresh token use issues a new one and invalidates the old.">
        <Title>Refresh Tokens</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Rotate</Highlight> on every use
        </Text>
      </Slide>

      {/* Slide 36: HTTPS Mandatory */}
      <Slide notes="HTTPS is mandatory everywhere except localhost for development.">
        <Title>Transport</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">HTTPS</Highlight> mandatory
        </Text>
      </Slide>

      {/* ===== SECTION 3: MODERN EXTENSIONS ===== */}

      {/* Slide 37: Extensions Header */}
      <Slide
        notes="Now we shift to optional extensions that enhance OAuth."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>Modern Extensions</Title>
        <Subtitle style={{ color: "#ffffff" }}>Optional</Subtitle>
      </Slide>

      {/* ===== DPoP SUBSECTION ===== */}

      {/* Slide 38: DPoP Problem */}
      <Slide
        notes="Bearer tokens work like cash - anyone who has them can use them."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>Problem</Title>
        <Text style={{ color: "#ffffff", fontSize: "2em" }}>
          Bearer tokens <Highlight color="#2b303b">like cash</Highlight>
        </Text>
      </Slide>

      {/* Slide 39: DPoP Intro */}
      <Slide notes="DPoP binds tokens to cryptographic keys.">
        <Title>DPoP</Title>
        <Subtitle>Demonstrating Proof-of-Possession</Subtitle>
        <Text style={{ marginTop: "2em" }}>RFC 9449</Text>
      </Slide>

      {/* Slide 40-42: DPoP Benefits */}
      <Slide notes="DPoP binds access tokens to client keys.">
        <Title>DPoP</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Binds</Highlight> tokens to keys
        </Text>
      </Slide>

      <Slide notes="Client must sign every request to prove possession.">
        <Title>DPoP</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Sign</Highlight> every request
        </Text>
      </Slide>

      <Slide notes="Stolen tokens are useless without the private key.">
        <Title>DPoP</Title>
        <Text style={{ fontSize: "2em" }}>
          Stolen tokens <Highlight color="#a3be8c">useless</Highlight>
        </Text>
      </Slide>

      {/* Slide 43: DPoP Code - Generate Keys */}
      <Slide notes="Step 1: Generate an asymmetric key pair.">
        <Title>Generate Key Pair</Title>
        <Code
          lang="javascript"
          code={`const { publicKey, privateKey } =
  await crypto.subtle.generateKey(
    {
      name: 'ECDSA',
      namedCurve: 'P-256'
    },
    true,
    ['sign', 'verify']
  );`}
        />
      </Slide>

      {/* Slide 44: DPoP Code - Create Proof */}
      <Slide notes="Step 2: Create a proof JWT for each request.">
        <Title>Create Proof JWT</Title>
        <Code
          lang="javascript"
          code={`const dpopProof = createJWT({
  header: {
    typ: 'dpop+jwt',
    alg: 'ES256',
    jwk: publicKey
  },
  payload: {
    htm: 'POST',
    htu: 'https://api.example.com'
  }
}, privateKey);`}
        />
      </Slide>

      {/* Slide 45: DPoP Code - Send */}
      <Slide notes="Step 3: Send token with proof in every request.">
        <Title>Send Token + Proof</Title>
        <Code
          lang="javascript"
          code={`fetch('/resource', {
  headers: {
    'Authorization': \`DPoP \${token}\`,
    'DPoP': dpopProof
  }
});`}
        />
      </Slide>

      {/* Slide 46: DPoP Status */}
      <Slide notes="DPoP is optional - use for high-security APIs.">
        <Title>DPoP Status</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Optional</Highlight> (RFC 9449)
        </Text>
      </Slide>

      {/* ===== CIBA SUBSECTION ===== */}

      {/* Slide 47: CIBA Problem */}
      <Slide
        notes="Traditional OAuth requires real-time browser presence."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>Problem</Title>
        <Text style={{ color: "#ffffff", fontSize: "2em" }}>
          User must be at <Highlight color="#2b303b">browser</Highlight>
        </Text>
      </Slide>

      {/* Slide 48: CIBA Intro */}
      <Slide notes="CIBA enables async, decoupled authentication.">
        <Title>CIBA</Title>
        <Subtitle>Backchannel Authentication</Subtitle>
        <Text style={{ marginTop: "2em" }}>OpenID Extension</Text>
      </Slide>

      {/* Slide 49-51: CIBA Flow */}
      <Slide notes="Step 1: Client initiates auth via backchannel.">
        <Title>CIBA</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">1. Initiate</Highlight> via backchannel
        </Text>
      </Slide>

      <Slide notes="Step 2: User gets notified and approves on their device.">
        <Title>CIBA</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">2. Approve</Highlight> on mobile
        </Text>
      </Slide>

      <Slide notes="Step 3: Client polls or receives callback with token.">
        <Title>CIBA</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">3. Poll</Highlight> for token
        </Text>
      </Slide>

      {/* Slide 52: CIBA Code - Initiate */}
      <Slide notes="Initiate backchannel authentication.">
        <Title>Initiate Auth</Title>
        <Code
          lang="javascript"
          code={`const { auth_req_id } =
  await fetch('/bc-authorize', {
    body: new URLSearchParams({
      login_hint: 'user@example.com',
      binding_message: 'Approve #12345'
    })
  }).then(r => r.json());`}
        />
      </Slide>

      {/* Slide 53: CIBA Code - Poll */}
      <Slide notes="Poll for token after user approves.">
        <Title>Poll for Token</Title>
        <Code
          lang="javascript"
          code={`const token = await fetch('/token', {
  body: new URLSearchParams({
    grant_type:
      'urn:openid:params:grant-type:ciba',
    auth_req_id: auth_req_id
  })
});`}
        />
      </Slide>

      {/* Slide 54-55: CIBA Use Cases */}
      <Slide notes="CIBA is perfect for IoT and call center scenarios.">
        <Title>CIBA Use Cases</Title>
        <List>
          <li>IoT devices</li>
          <li>Call centers</li>
        </List>
      </Slide>

      <Slide notes="Also great for async approvals and high-value transactions.">
        <Title>CIBA Use Cases</Title>
        <List>
          <li>Async approvals</li>
          <li>High-value transactions</li>
        </List>
      </Slide>

      {/* ===== METADATA SUBSECTION ===== */}

      {/* Slide 56: Metadata Problem */}
      <Slide
        notes="Before metadata, configuration was manual copy-paste."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>Problem</Title>
        <Text style={{ color: "#ffffff", fontSize: "2em" }}>
          <Highlight color="#2b303b">Manual</Highlight> configuration
        </Text>
      </Slide>

      {/* Slide 57: Metadata Intro */}
      <Slide notes="RFC 8414 enables discovery via well-known endpoints.">
        <Title>Metadata</Title>
        <Subtitle>Server Discovery</Subtitle>
        <Text style={{ marginTop: "2em" }}>RFC 8414</Text>
      </Slide>

      {/* Slide 58: Metadata Code */}
      <Slide notes="Fetch metadata from well-known endpoint.">
        <Title>Fetch Metadata</Title>
        <Code
          lang="javascript"
          code={`const metadata = await fetch(
  '/.well-known/oauth-authorization-server'
).then(r => r.json());

// Returns endpoints, capabilities,
// supported algorithms, etc.`}
        />
      </Slide>

      {/* Slide 59: Metadata Benefits */}
      <Slide notes="Metadata enables dynamic configuration and reduces errors.">
        <Title>Metadata Benefits</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Dynamic</Highlight> configuration
        </Text>
      </Slide>

      {/* ===== TOKEN EXCHANGE SUBSECTION ===== */}

      {/* Slide 60: Token Exchange Problem */}
      <Slide
        notes="Services used to just copy tokens around - violates least privilege."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>Problem</Title>
        <Text style={{ color: "#ffffff", fontSize: "2em" }}>
          <Highlight color="#2b303b">Copying</Highlight> credentials
        </Text>
      </Slide>

      {/* Slide 61: Token Exchange Intro */}
      <Slide notes="Token Exchange enables scoped delegation.">
        <Title>Token Exchange</Title>
        <Subtitle>Scoped Delegation</Subtitle>
        <Text style={{ marginTop: "2em" }}>RFC 8693</Text>
      </Slide>

      {/* Slide 62: Token Exchange Code */}
      <Slide notes="Exchange user token for service-specific token.">
        <Title>Exchange Token</Title>
        <Code
          lang="javascript"
          code={`const { access_token } = await fetch('/token', {
  body: new URLSearchParams({
    grant_type:
      'urn:ietf:params:oauth:grant-type:token-exchange',
    subject_token: userToken,
    audience: 'https://serviceB.com',
    scope: 'read:data'
  })
}).then(r => r.json());`}
        />
      </Slide>

      {/* Slide 63-65: Token Exchange Benefits */}
      <Slide notes="Each service gets minimal scope - least privilege.">
        <Title>Token Exchange</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Least privilege</Highlight>
        </Text>
      </Slide>

      <Slide notes="Tokens only work for intended service - audience restriction.">
        <Title>Token Exchange</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Audience restriction</Highlight>
        </Text>
      </Slide>

      <Slide notes="Compromised service has limited blast radius.">
        <Title>Token Exchange</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Breach containment</Highlight>
        </Text>
      </Slide>

      {/* ===== JWT BEARER SUBSECTION ===== */}

      {/* Slide 66: JWT Bearer Intro */}
      <Slide notes="JWT Bearer enables B2B identity assertion.">
        <Title>JWT Bearer</Title>
        <Subtitle>Cross-App Access</Subtitle>
        <Text style={{ marginTop: "2em" }}>RFC 7523</Text>
      </Slide>

      {/* Slide 67: JWT Bearer Code */}
      <Slide notes="App A asserts user identity to get App B token.">
        <Title>Assert Identity</Title>
        <Code
          lang="javascript"
          code={`const assertion = signJWT({
  iss: 'appA.example.com',
  sub: 'user@example.com',
  aud: 'https://auth.example.com'
}, appAPrivateKey);

const token = await fetch('/token', {
  body: {
    grant_type: 'jwt-bearer',
    assertion: assertion
  }
});`}
        />
      </Slide>

      {/* ===== SECTION 4: PRACTICAL GUIDANCE ===== */}

      {/* Slide 68: Guidance Header */}
      <Slide
        notes="Now let's talk about when to use what."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>Practical Guidance</Title>
      </Slide>

      {/* Slide 69: Core vs Extensions */}
      <Slide notes="Understand what's mandatory versus optional.">
        <Title>Remember</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Core</Highlight> = mandatory
        </Text>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">Extensions</Highlight> = optional
        </Text>
      </Slide>

      {/* Slide 70-73: When to Use */}
      <Slide notes="PKCE is mandatory - always use it.">
        <Title>When to Use</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">PKCE:</Highlight> Always (mandatory)
        </Text>
      </Slide>

      <Slide notes="DPoP for high-security scenarios.">
        <Title>When to Use</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">DPoP:</Highlight> High-security APIs
        </Text>
      </Slide>

      <Slide notes="CIBA for IoT and async auth.">
        <Title>When to Use</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">CIBA:</Highlight> IoT, async auth
        </Text>
      </Slide>

      <Slide notes="Token Exchange for microservices.">
        <Title>When to Use</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">Token Exchange:</Highlight> Microservices
        </Text>
      </Slide>

      {/* Slide 74: Modern Use Case - AI Agents */}
      <Slide notes="Token Exchange perfect for AI agents needing scoped access.">
        <Title>Modern Use Case</Title>
        <Text style={{ fontSize: "2em" }}>
          <Highlight color="#a3be8c">AI agents</Highlight> + Token Exchange
        </Text>
      </Slide>

      {/* Slide 75: AI Agent Code */}
      <Slide notes="Agent gets minimal scoped tokens for each service.">
        <Title>AI Agent Access</Title>
        <Code
          lang="javascript"
          code={`// Calendar access only
const calToken = await tokenExchange(
  userToken, 'calendar.com', 'read:events'
);

// Email access only
const emailToken = await tokenExchange(
  userToken, 'email.com', 'send:email'
);`}
        />
      </Slide>

      {/* Slide 76-78: Secure by Default */}
      <Slide
        notes="OAuth 2.1's philosophy: make security the default."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Title>Secure by Default</Title>
      </Slide>

      <Slide
        notes="Making the right choice the easy choice."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Quote style={{ color: "#ffffff" }}>
          Make the <Highlight color="#2b303b">right choice</Highlight> the easy
          choice
        </Quote>
      </Slide>

      <Slide
        notes="Security should be the path of least resistance."
        style={{ backgroundColor: "#a3be8c", color: "#ffffff" }}
      >
        <Quote style={{ color: "#ffffff" }}>
          Security = path of{" "}
          <Highlight color="#2b303b">least resistance</Highlight>
        </Quote>
      </Slide>

      {/* Slide 79-83: Key Takeaways */}
      <Slide notes="Key takeaway: PKCE is mandatory, insecure flows removed.">
        <Title>Key Takeaway</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">PKCE mandatory</Highlight>, insecure flows
          removed
        </Text>
      </Slide>

      <Slide notes="Understand the difference: core vs extensions.">
        <Title>Key Takeaway</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">Core</Highlight> mandatory,{" "}
          <Highlight color="#a3be8c">extensions</Highlight> optional
        </Text>
      </Slide>

      <Slide notes="Each extension solves specific problems.">
        <Title>Key Takeaway</Title>
        <Text style={{ fontSize: "1.6em" }}>
          DPoP = <Highlight color="#a3be8c">theft protection</Highlight>
        </Text>
        <Text style={{ fontSize: "1.6em" }}>
          CIBA = <Highlight color="#a3be8c">async auth</Highlight>
        </Text>
        <Text style={{ fontSize: "1.6em" }}>
          Token Exchange ={" "}
          <Highlight color="#a3be8c">scoped delegation</Highlight>
        </Text>
      </Slide>

      <Slide notes="Choose based on your actual needs, not hype.">
        <Title>Key Takeaway</Title>
        <Text style={{ fontSize: "1.8em" }}>
          Choose based on <Highlight color="#a3be8c">your needs</Highlight>
        </Text>
      </Slide>

      <Slide notes="Modern systems should be secure by default.">
        <Title>Key Takeaway</Title>
        <Text style={{ fontSize: "1.8em" }}>
          <Highlight color="#a3be8c">Secure by default</Highlight>, not by
          accident
        </Text>
      </Slide>

      {/* ===== CLOSING ===== */}

      {/* Slide 84-85: Resources */}
      <Slide notes="Key RFCs for OAuth 2.1 core.">
        <Title>Resources: Core</Title>
        <List>
          <li>
            OAuth 2.1:{" "}
            <a
              href="https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              draft-ietf-oauth-v2-1
            </a>
          </li>
          <li>
            PKCE:{" "}
            <a
              href="https://datatracker.ietf.org/doc/html/rfc7636"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              RFC 7636
            </a>
          </li>
          <li>
            Metadata:{" "}
            <a
              href="https://datatracker.ietf.org/doc/html/rfc8414"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              RFC 8414
            </a>
          </li>
        </List>
      </Slide>

      <Slide notes="Key RFCs for optional extensions.">
        <Title>Resources: Extensions</Title>
        <List>
          <li>
            DPoP:{" "}
            <a
              href="https://datatracker.ietf.org/doc/html/rfc9449"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              RFC 9449
            </a>
          </li>
          <li>
            Token Exchange:{" "}
            <a
              href="https://datatracker.ietf.org/doc/html/rfc8693"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              RFC 8693
            </a>
          </li>
          <li>
            JWT Bearer:{" "}
            <a
              href="https://datatracker.ietf.org/doc/html/rfc7523"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              RFC 7523
            </a>
          </li>
          <li>
            CIBA:{" "}
            <a
              href="https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              OpenID CIBA Spec
            </a>
          </li>
        </List>
      </Slide>

      {/* Slide 86: Thank You */}
      <Slide notes="Thank the audience and open for questions.">
        <Title>Thank You</Title>
        <Text style={{ fontSize: "1.5em", marginTop: "2em" }}>
          The <Highlight color="#a3be8c">bearer</Highlight> of good news has
          arrived
        </Text>
      </Slide>
    </Deck>
  );
}
