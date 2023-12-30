import { NextResponse } from "next/server";

export function Success(message: string, otherResponses?: Object) {
  return NextResponse.json(
    { message, status: 200, success: true, ...otherResponses },
    { status: 200 }
  );
}

export function CreatedSuccessfully(message: string, otherResponses?: Object) {
  return NextResponse.json(
    { status: 201, message, success: true, ...otherResponses },
    { status: 201 }
  );
}

export function InternalServerError() {
  return NextResponse.json(
    { message: "Internal server error", status: 500, success: false },
    { status: 500 }
  );
}

export function Forbidden(message: string) {
  return NextResponse.json(
    { message, status: 403, success: false },
    { status: 403 }
  );
}

export function BadRequest(message: string) {
  return NextResponse.json(
    { message, status: 400, success: false },
    { status: 400 }
  );
}
