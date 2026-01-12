import { useState } from "react";
import { useFetcher } from "react-router";
import type { Route } from "./+types";

import { useAuth } from "~/context/AuthContext";

import { createIdeaFunction } from "~/api/ideas";

export const action = async ({ request }: Route.ActionArgs) => {
  const data = await request.formData();

  const accessToken = data.get("accessToken")?.toString();
  const userId = data.get("userId")?.toString();
  const title = data.get("title")?.toString();
  const summary = data.get("summary")?.toString();
  const description = data.get("description")?.toString();
  const tags = data.get("tags")?.toString();

  if (!title || !summary || !description || !tags) {
    return { error: "Please fill out all the fields to submit a new idea" };
  }

  //parse tags and make it into an array
  const tagArray = tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (userId && accessToken) {
    const newIdea = {
      userId,
      title,
      summary,
      description,
      tags: tagArray,
    };

    const res = await createIdeaFunction(newIdea, accessToken);
    return res;
  }
};

const IdeaCreatePage = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const fetcher = useFetcher();

  const { token, user } = useAuth();

  return (
    <div className="max-w-6xl mx-auto my-20">
      <h2 className="text-2xl font-bold mb-10">
        Have a new idea? Share it with everyone!
      </h2>
      {fetcher.data?.error && (
        <div className="bg-red-100 text-red-700 text-center py-2 rounded">
          {fetcher.data.error}
        </div>
      )}

      <fetcher.Form method="post" className="flex flex-col">
        <div className="flex flex-col my-4">
          <label className="text-sm text-gray-600 px-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (fetcher.data?.error) fetcher.data.error = "";
            }}
            placeholder="Best idea ever"
            className="p-2 border border-gray-400 rounded"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className="text-sm text-gray-600 px-1" htmlFor="summary">
            Summary
          </label>
          <input
            type="text"
            name="summary"
            id="summary"
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
              if (fetcher.data?.error) fetcher.data.error = "";
            }}
            placeholder="Summary for the best idea ever"
            className="p-2 border border-gray-400 rounded"
          />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="description" className="text-sm text-gray-600 px-1">
            Description
          </label>
          <textarea
            rows={3}
            name="description"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              if (fetcher.data?.error) fetcher.data.error = "";
            }}
            placeholder="Best idea ever"
            className="p-2 border border-gray-400 rounded"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className="text-sm text-gray-600 px-1" htmlFor="tags">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
              if (fetcher.data?.error) fetcher.data.error = "";
            }}
            placeholder="tech, electronics, mobile"
            className="p-2 border border-gray-400 rounded"
          />
        </div>

        {/* hidden inputs to store accessToken and userId */}
        <input
          type="password"
          name="accessToken"
          id="accessToken"
          readOnly
          value={token?.toString()}
          className="hidden"
        />

        <input
          type="password"
          name="userId"
          id="userId"
          readOnly
          value={user?.id.toString()}
          className="hidden"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-10 rounded hover:bg-blue-700 hover:shadow-lg"
        >
          Submit idea
        </button>
      </fetcher.Form>
    </div>
  );
};

export default IdeaCreatePage;
