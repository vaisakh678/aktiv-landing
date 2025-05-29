"use client";

import React, { useId } from "react";
import { Checkbox } from "../../../components/ui/checkbox";
import AKTIVInput from "../../../components/ui/AKTIVInput";
import AKTIVTextarea from "../../../components/ui/AKTIVTextarea";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RotateCw } from "lucide-react";

interface AKIVCheckboxProps extends React.ComponentProps<typeof Checkbox> {
  label?: string;
}

const AKIVCheckbox: React.FC<AKIVCheckboxProps> = ({
  label,
  className,
  ...rest
}) => {
  const id = useId();
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor={id} className="text-xl font-semibold">
        {label}
      </label>
      <Checkbox id={id} {...rest} className={className} />
    </div>
  );
};

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email Address is required"),
  phone: z.string().min(1, "Phone Number is required"),
  spreadSocialMedia: z.boolean(),
  spreadWordOfMouth: z.boolean(),
  spreadLocalEvents: z.boolean(),
  spreadOther: z.boolean(),
  spreadOtherText: z.string().optional(),

  passionForFitness: z.string().min(1, "This field is required"),
  howStayActive: z.string().min(1, "This field is required"),
  whyAmbassador: z.string().min(1, "This field is required"),
  feedbackIdeas: z.string().optional(),

  instagram: z.string().url("Invalid URL").optional(),
  facebook: z.string().url("Invalid URL").optional(),
  x: z.string().url("Invalid URL").optional(),

  additionalInfo: z.string().optional(),
});

type AmbassadorFormData = z.infer<typeof schema>;

import { toast } from "sonner";

const AmbassadorApplicationForm = () => {
  async function onSubmit(data: AmbassadorFormData) {
    // Handle form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted with data:", data);
    toast.success("Application submitted successfully!");
  }

  const {
    handleSubmit,
    register,
    control,
    formState: { isSubmitting, errors },
  } = useForm<AmbassadorFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      spreadLocalEvents: false,
      spreadSocialMedia: false,
      spreadWordOfMouth: false,
      spreadOther: false,
    },
  });

  console.log("err: ", errors);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[530px]">
          <h1 className="text-center font-poppins text-[40px] font-medium">
            Who should Join
          </h1>
          <p className="mt-3 text-center text-xl font-medium text-[#E0E0E0]">
            Anyone who loves fitness, sports, or just staying active{"\n"}You
            don’t need a big following, just real effort and good energy.
          </p>
        </div>
        <div className="mt-[100px] max-w-[715px]">
          <h1 className="text-center font-poppins text-[40px] font-medium">
            Who should Join
          </h1>
          <p className="mt-3 text-center text-xl font-medium text-[#E0E0E0]">
            Anyone who loves fitness, sports, or just staying active{"\n"}You
            don’t need a big following, just real effort and good energy.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-[128px] mt-[75px] flex w-full flex-col"
        >
          <fieldset
            className="group flex flex-col gap-8"
            disabled={isSubmitting}
          >
            {/*  */}

            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
              <div className="flex flex-1 flex-col gap-12">
                <div className="flex flex-col gap-8">
                  <h1 className="text-2xl font-semibold">Personal Details</h1>

                  <AKTIVInput
                    label="Full Name"
                    {...register("fullName")}
                    helperText={errors.fullName?.message}
                    error={!!errors.fullName}
                  />
                  <AKTIVInput
                    label="Email Address"
                    {...register("email")}
                    helperText={errors.email?.message}
                    error={!!errors.email}
                  />
                  <AKTIVInput
                    label="Phone Number"
                    {...register("phone")}
                    helperText={errors.phone?.message}
                    error={!!errors.phone}
                  />
                </div>

                <div className="flex flex-col gap-8">
                  <h1 className="text-2xl font-semibold">
                    How do you plan to spread the word about Aktiv? (Check all
                    that apply)
                  </h1>

                  <div className="flex flex-col gap-3">
                    <Controller
                      control={control}
                      name="spreadSocialMedia"
                      render={({ field }) => (
                        <AKIVCheckbox
                          label="Social media (Instagram, X, etc.)️"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name="spreadWordOfMouth"
                      render={({ field }) => (
                        <AKIVCheckbox
                          label="Word of mouth (friends, family, Fitness/Sports Buddies)"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name="spreadLocalEvents"
                      render={({ field }) => (
                        <AKIVCheckbox
                          label="Local events or meetups"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name="spreadOther"
                      render={({ field }) => (
                        <AKIVCheckbox
                          label="Other (please specify)"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <AKTIVTextarea
                      className="w-full"
                      {...register("spreadOtherText")}
                      helperText={errors.spreadOtherText?.message}
                      error={!!errors.spreadOtherText}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex flex-col gap-8">
                  <h1 className="text-2xl font-semibold">About You</h1>

                  <AKTIVInput
                    label="What makes you passionate about fitness?*"
                    {...register("passionForFitness")}
                    helperText={errors.passionForFitness?.message}
                    error={!!errors.passionForFitness}
                  />
                  <AKTIVInput
                    label="How do you stay active?*"
                    {...register("howStayActive")}
                    helperText={errors.howStayActive?.message}
                    error={!!errors.howStayActive}
                  />
                  <AKTIVInput
                    label="Why do you want to be an Aktiv Ambassador?*"
                    {...register("whyAmbassador")}
                    helperText={errors.whyAmbassador?.message}
                    error={!!errors.whyAmbassador}
                  />
                  <AKTIVInput
                    label="Any feedback or ideas that can be implemented to improve Aktiv? (optional)*"
                    {...register("feedbackIdeas")}
                    helperText={errors.feedbackIdeas?.message}
                    error={!!errors.feedbackIdeas}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex w-full flex-col gap-8">
                <h1 className="text-2xl font-semibold">Social Links*</h1>

                <div className="flex w-full flex-col gap-5 md:flex-row">
                  <AKTIVInput
                    className="w-full"
                    label="Instagram"
                    {...register("instagram")}
                    helperText={errors.instagram?.message}
                    error={!!errors.instagram}
                  />
                  <AKTIVInput
                    className="w-full"
                    label="Facebook"
                    {...register("facebook")}
                    helperText={errors.facebook?.message}
                    error={!!errors.facebook}
                  />
                  <AKTIVInput
                    className="w-full"
                    label="X"
                    {...register("x")}
                    helperText={errors.x?.message}
                    error={!!errors.x}
                  />
                </div>
              </div>

              <div className="flex w-full flex-col">
                <h1 className="mb-3 text-2xl font-semibold">
                  Anything else you&apos;d like to share with us? (Optional)*
                </h1>
                <AKTIVTextarea
                  {...register("additionalInfo")}
                  helperText={errors.additionalInfo?.message}
                  error={!!errors.additionalInfo}
                />
              </div>
            </div>

            <button
              className="flex h-[60px] w-full cursor-pointer items-center justify-center rounded-[12px] bg-[#3399FF] text-black hover:opacity-80 disabled:opacity-90 lg:max-w-[630px]"
              type="submit"
            >
              <RotateCw className="hidden animate-spin group-disabled:flex" />
              <span className="group-disabled:hidden">Submit</span>
            </button>

            {/*  */}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AmbassadorApplicationForm;
