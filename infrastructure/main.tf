provider "aws" {
  region  = "us-east-1"
  profile = "default"
}

terraform {
  backend "s3" {
    bucket  = "rc-cinema-tf-state"
    key     = "rc-cinema.tfstate"
    region  = "us-east-1"
    encrypt = true
    profile = "default"
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "Ryan Carroll"
  }
}