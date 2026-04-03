# Brevo Email Integration

## Setup Instructions

1. Get your Brevo API key from https://app.brevo.com/settings/keys/api
2. Add the API key to your environment variables:
   ```
   BREVO_API_KEY=your_api_key_here
   ```
3. Create a Brevo contact list for AItomation Academy leads
4. Update the list ID in the API route below

## API Route

Create `app/api/subscribe/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name,
        },
        listIds: [1], // Replace with your list ID
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo API error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Form Component Update

Update `lead-magnet-form.tsx` to call the API:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("loading");

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name }),
    });

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage("Failed to subscribe. Please try again.");
    }
  } catch (error) {
    setStatus("error");
    setErrorMessage("Something went wrong. Please try again.");
  }
};
```

## Automation Setup in Brevo

1. Create a welcome email automation triggered on list join
2. Send the Workflow Starter PDF as the first email
3. Follow up with nurture sequence (see email-sequence skill)
