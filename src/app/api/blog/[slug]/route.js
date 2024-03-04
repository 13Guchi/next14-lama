import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

// params had to be after request
export async function GET(request, { params }) {
  const { slug } = params;

  try {
    connectToDb();

    const post = await Post.findOne({ slug });

    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
}

export async function DELETE(request, { params }) {
  const { slug } = params;

  try {
    connectToDb();

    await Post.deleteOne({ slug });

    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
}
