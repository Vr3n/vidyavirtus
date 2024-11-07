"use client";

import { Github, Linkedin, Loader2, Plus, Upload } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { UserAvatar } from "./user-avatar";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

interface Skill {
  id: string;
  name: string;
}

export const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSkills, setCurrentSkills] = useState<Skill[]>([
    { id: "1", name: "Python" },
    { id: "2", name: "SQL" },
    { id: "3", name: "Statistical Analysis" },
    { id: "4", name: "ETL" },
  ]);
  const [targetSkills, setTargetSkills] = useState<Skill[]>([
    { id: "1", name: "Python" },
    { id: "2", name: "SQL" },
    { id: "3", name: "Statistical Analysis" },
    { id: "4", name: "ETL" },
  ]);
  const [newSkill, setNewSkill] = useState("");

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const addSkill = (skillSet: "current" | "target") => {
    if (!newSkill) return;
    const skill = { id: Date.now().toString(), name: newSkill };
    if (skillSet === "current") {
      setCurrentSkills([...currentSkills, skill]);
    } else {
      setTargetSkills([...targetSkills, skill]);
    }
    setNewSkill("");
  };

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-alabaster-200">
          <CardHeader>
            <CardTitle>Your Photo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center gap-4">
              <UserAvatar
                avatar_url="https://avatar.iran.liara.run/public"
                full_name="viren patel"
              />
              <p className="text-sm text-muted-foreground">
                This will be displayed on your profile
              </p>
              <div className="flex gap-2">
                <Button className="bg-richblack-500 text-white">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New
                </Button>
                <Button variant="outline">Save</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-alabaster-200">
          <CardHeader>
            <CardTitle>Bio</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Short Description of yourself"
              className="min-h-[128px]"
            />
          </CardContent>
        </Card>

        <Card className="bg-alabaster-200 md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Pietro Schirano" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input id="mobile" type="tel" placeholder="Pietro Schirano" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Pietro Schirano" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Pietro Schirano" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Pietro Schirano" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-alabaster-200 md:col-span-2">
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="linkedin">
                <Linkedin className="w-4 h-4 inline mr-2" />
                LinkedIn URL
              </Label>
              <Input
                id="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">
                <Github className="w-4 h-4 inline mr-2" />
                GitHub URL
              </Label>
              <Input
                id="github"
                type="url"
                placeholder="https://github.com/username"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-alabaster-200">
          <CardHeader>
            <CardTitle>Current Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {currentSkills.map((skill) => (
                <Badge key={skill.id} variant="secondary" className="text-sm">
                  {skill.name}
                </Badge>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => addSkill("current")}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleSave}
                disabled={isLoading}
                className="bg-richblack-500 text-white"
              >
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Save
              </Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-alabaster-200">
          <CardHeader>
            <CardTitle>Target Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {targetSkills.map((skill) => (
                <Badge key={skill.id} variant="secondary" className="text-sm">
                  {skill.name}
                </Badge>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => addSkill("target")}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleSave}
                disabled={isLoading}
                className="bg-richblack-500 text-white"
              >
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Save
              </Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-4">
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className="bg-richblack-500 text-white"
        >
          {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          Save All Changes
        </Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </>
  );
};
