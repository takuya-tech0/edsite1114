import { NextResponse } from 'next/server';

const API_BASE_URL = 'http://ec1114.ap-northeast-1.elasticbeanstalk.com';

export async function GET(request: Request) {
  try {
    // URLからパスを取得
    const pathname = new URL(request.url).pathname;
    // /api/proxy を除去してAPIのパスを取得
    const endpoint = pathname.replace('/api/proxy', '');
    
    // バックエンドAPIへリクエスト
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

// POST、PUT、DELETEメソッドも追加
export async function POST(request: Request) {
  try {
    const pathname = new URL(request.url).pathname;
    const endpoint = pathname.replace('/api/proxy', '');
    const body = await request.json();

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const pathname = new URL(request.url).pathname;
    const endpoint = pathname.replace('/api/proxy', '');
    const body = await request.json();

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const pathname = new URL(request.url).pathname;
    const endpoint = pathname.replace('/api/proxy', '');

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}